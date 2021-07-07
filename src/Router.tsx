import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  return (
    <HashRouter>
    <Route path="/" component={Home} />
    </HashRouter>
  );
}

export default Router;
