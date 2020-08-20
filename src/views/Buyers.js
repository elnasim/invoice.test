import React, { useState, useEffect } from "react";
import { useAppContext } from "../AppProvider";
import BuyersBody from "../components/buyers-body/BuyersBody";
import BuyersInput from "../components/buyers-input/BuyersInput";
import BuyersSelect from "../components/buyers-select/BuyersSelect";
import BuyersPagination from "../components/buyers-pagination/BuyersPagination";

export default function Buyers() {
  const [filteredBuyers, setFilteredBuyers] = useState([]);
  const [perPage, setPerPage] = useState(15);
  const [page, setPage] = useState(0);
  const [sortingDirection, setSortingDirection] = useState(null);
  const [currColumn, setCurrColumn] = useState(null);

  const { buyers } = useAppContext();

  useEffect(() => {
    setFilteredBuyers(buyers);
  }, [buyers]);

  useEffect(() => {
    setFilteredBuyers((prev) => {
      return [
        ...prev.sort((a, b) => {
          if (a[currColumn] < b[currColumn]) {
            return sortingDirection ? 1 : -1;
          } else if (a[currColumn] > b[currColumn]) {
            return sortingDirection ? -1 : 1;
          } else {
            return 0;
          }
        }),
      ];
    });
  }, [sortingDirection, currColumn]);

  useEffect(() => {
    setFilteredBuyers(buyers.slice().splice(page * perPage, perPage));
  }, [buyers, page, perPage]);

  const filterBuyers = (name) => {
    const persons = buyers.filter((item) =>
      item.name.toLowerCase().includes(name.trim().toLowerCase())
    );
    setFilteredBuyers(persons);
  };

  const sortBuyers = (columnName) => {
    if (currColumn === columnName) {
      setSortingDirection((prev) => !prev);
    } else {
      setCurrColumn(() => columnName);
      setSortingDirection(true);
    }
  };

  const changePerPage = (val) => {
    setPage(0);
    setPerPage(val);

    setFilteredBuyers(buyers.slice().splice(page * val, page * val + val));
  };

  const changePage = (page) => {
    setPage(page - 1);
  };

  return (
    <div className="buyers-page">
      <BuyersInput filterBuyers={filterBuyers} />
      <BuyersSelect changePerPage={changePerPage} />
      <BuyersBody buyers={filteredBuyers} sortBuyers={sortBuyers} />
      <BuyersPagination
        numOfItems={buyers.length}
        perPage={perPage}
        changePage={changePage}
      />
    </div>
  );
}
