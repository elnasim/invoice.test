import React, { useState } from "react";
import { useAppContext } from "../../AppProvider";
import FormError from "../form-error/FormError";

export default function TerminalsForm() {
  const [terminalTitle, setTerminalTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const appContext = useAppContext();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!terminalTitle.trim() || !description.trim()) {
      setShowError(true);
      return;
    }

    const id = Date.now();

    appContext.addTerminal({
      id,
      terminalTitle: terminalTitle.trim(),
      description: description.trim(),
    });

    setTerminalTitle("");
    setDescription("");
    setShowError(false);
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

      {showError && <FormError>Поля не должны быть пустыми</FormError>}
    </form>
  );
}
