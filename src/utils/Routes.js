import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "containers/Home";
import Items from "containers/Items";

const RoutesApp = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/items`} element={<Items />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
