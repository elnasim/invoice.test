import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../AppProvider";
import FormError from "../form-error/FormError";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const appContext = useAppContext();
  const history = useHistory();

  useEffect(() => {
    const checkUser = async () => {
      if (appContext.userData) {
        history.push("/terminals");
      }
    };

    checkUser();
  }, [appContext.userData, history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if (password.trim().length < 8 || !reg.test(password)) {
      setShowError(true);
      return;
    }

    getUser();
  };

  const getUser = async () => {
    try {
      setLoading(true);

      const res = await fetch(`https://api.github.com/users/${userName}`);
      const userData = await res.json();

      appContext.changeUserData(userData);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="label">
        <input
          type="text"
          className="input-text"
          placeholder="Пользователь гитхаб"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      <label className="label">
        <input
          type="password"
          className="input-text"
          placeholder="Пароль"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button className="button-form button">
        {loading ? "Загрузка..." : "Войти"}
      </button>

      {showError && (
        <FormError>
          Поля не должны быть пустыми
          <br />
          <br /> Пароль должен содержать хотя бы 1 прописную латинскую букву,
          хотя бы 1 строчную латинскую букву, хотя бы 1 цифру
        </FormError>
      )}
    </form>
  );
}
