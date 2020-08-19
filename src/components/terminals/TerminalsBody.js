import React, { useEffect } from "react";
import { useAppContext } from "../../AppProvider";

import "./TerminalsBody.scss";

export default function TerminalsBody() {
  const { terminals } = useAppContext();
  const { removeTerminal } = useAppContext();

  const removeHandler = (e, id) => {
    e.preventDefault();
  };

  return (
    <>
      {terminals && (
        <table className="terminals-body">
          <tbody>
            <tr>
              <td>Название</td>
              <td>Описание</td>
              <td></td>
            </tr>

            {terminals.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.terminalTitle}</td>
                  <td>{item.description}</td>
                  <td className="center">
                    <a href="#" onClick={removeHandler(item.id)}>
                      x
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
