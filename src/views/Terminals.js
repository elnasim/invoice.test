import React from "react";

import TerminalsForm from "../components/terminals-form/TerminalsForm";
import TerminalsBody from "../components/terminals/TerminalsBody";

export default function Terminals() {
  return (
    <div className="terminals-page">
      <TerminalsForm />

      <TerminalsBody />
    </div>
  );
}
