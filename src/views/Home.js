import React from "react";
import LoginForm from "../components/login-form/LoginForm";

export default function Home() {
  return (
    <div>
      <div className="login-page">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
