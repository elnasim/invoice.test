import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../AppProvider";

import "./LoginForm.scss";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

    if (password.trim().length < 8) return;
    if (!reg.test(password)) return;

    await getUser();
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
    <form className="login-form" onSubmit={submitHandler}>
      <label className="login-form__label">
        <input
          type="text"
          className="login-form__input-text"
          placeholder="Пользователь гитхаб"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      <label className="login-form__label">
        <input
          type="password"
          className="login-form__input-text"
          placeholder="Пароль"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button className="login-form__button button">
        {loading ? "Загрузка..." : "Войти"}
      </button>
    </form>
  );
}
