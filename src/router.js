import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import Contact from "./containers/Contact";
import Thanks from "./containers/Thanks";


const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={Contact}></Route>
      <Route path="/thankyou" component={Thanks}></Route>
  </Router>
);

export default router;
