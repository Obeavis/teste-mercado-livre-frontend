import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "contexts/StateContext";
import Header from "components/Header";

const Home = () => {
  const { dispatch } = useContext(StateContext);

  return (
    <div className="min-h-screen">
        <Header />
      <div className="container max-w-7xl shadow-2xl">
      </div>
    </div>
  );
};

export default Home;