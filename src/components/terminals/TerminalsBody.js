import React from "react";
import { useAppContext } from "../../AppProvider";

import TerminalItem from "./TerminalItem";

import "./TerminalsBody.scss";

export default function TerminalsBody() {
  const { terminals } = useAppContext();

  if (!terminals.length) return null;

  return (
    <>
      <table className="terminals-body">
        <tbody>
          <tr>
            <td>Название</td>
            <td>Описание</td>
            <td></td>
          </tr>

          {terminals.map((item) => {
            return (
              <TerminalItem
                key={item.id}
                id={item.id}
                terminalTitle={item.terminalTitle}
                description={item.description}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
