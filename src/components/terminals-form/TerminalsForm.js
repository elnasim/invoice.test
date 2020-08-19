import React, { useState } from "react";
import { useAppContext } from "../../AppProvider";

export default function TerminalsForm() {
  const [terminalTitle, setTerminalTitle] = useState("");
  const [description, setDescription] = useState("");

  const appContext = useAppContext();

  const submitHandler = (e) => {
    e.preventDefault();

    const id = Date.now();

    appContext.addTerminal({
      id,
      terminalTitle,
      description,
    });

    setTerminalTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="label">
        <input
          type="text"
          className="input-text"
          placeholder="Название терминала"
          value={terminalTitle}
          onChange={(e) => setTerminalTitle(e.target.value)}
        />
      </label>

      <label className="label">
        <input
          type="text"
          className="input-text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button className="button-form button">Добавить</button>
    </form>
  );
}
