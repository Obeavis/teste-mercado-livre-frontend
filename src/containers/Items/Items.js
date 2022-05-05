import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "contexts/StateContext";
import { searchItems } from "services/apiService";
import { useQuery } from "utils/Hooks";
import Header from "components/Header";

const Home = () => {
  const { dispatch } = useContext(StateContext);
  const query = useQuery().get('search');

  useEffect(() => {
    console.log("query: ", query);
    dispatch({ type: "LOADING", payload: true });
    if (query) {
      (async () => {
        try {
          const { data } = await searchItems(query);
          console.log("data: ", data);
        } catch (error) {
          console.log(error);
        } finally {
          dispatch({ type: "LOADING", payload: false });
        }
      })();
    }
  }, [dispatch, query]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-7xl shadow-2xl"></div>
    </div>
  );
};

export default Home;
