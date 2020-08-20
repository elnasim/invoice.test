import React from "react";
import { useAppContext } from "../../AppProvider";

export default function TerminalItem({ id, terminalTitle, description }) {
  const { removeTerminal } = useAppContext();

  const removeHandler = (e) => {
    e.preventDefault();
    removeTerminal(id);
  };

  return (
    <tr>
      <td>{terminalTitle}</td>
      <td>{description}</td>
      <td className="center">
        <button onClick={removeHandler}>
          x
        </button>
      </td>
    </tr>
  );
}
