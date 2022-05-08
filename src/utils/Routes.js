import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "containers/Home";
import Items from "containers/Items";
import Item from "containers/Item";

const RoutesApp = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/items`} element={<Items />} />
        <Route path={`/items/:id`} element={<Item />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
