
import React from "react";
import { Route } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Route exact path="/" component = {WelcomePage} />
    </main>
  );
}