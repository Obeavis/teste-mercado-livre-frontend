import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "contexts/StateContext";
import { searchItems } from "services/apiService";
import { useQuery } from "utils/Hooks";
import Header from "components/Header";
import ItemList from "components/ItemsList/ItemList";
import { ReactComponent as ArrowIcon } from "static/icons/arrow.svg";
import Breadcrumb from "components/Breadcrumb";

const Items = () => {
  const { dispatch } = useContext(StateContext);
  const query = useQuery().get("search");
  const [items, setItems] = useState(null);
  const [categories, setCategories] = useState(null);
  const [page, setPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    if (query) {
      (async () => {
        try {
          const { data } = await searchItems(query);
          setItems(data.items);
          setCategories(data.categories);
          setMaxPages(Math.round(data.items.length / 4));
        } catch (error) {
          console.log(error);
        } finally {
          dispatch({ type: "LOADING", payload: false });
        }
      })();
    }
  }, [dispatch, query]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-secondary">
      <Header />
      <div className="container flex flex-col max-w-4xl mt-20">
        <Breadcrumb data={categories} />
      </div>
      <div className="container flex flex-col max-w-4xl shadow-xl bg-white mt-5">
        {items && <ItemList items={items} page={page} />}
      </div>
      <div className="flex items-center justify-center my-12">
        {page > 0 && (
          <button
            className="flex text-tertiary font-normal border border-transparent hover:bg-gray-100 active:border active:border-blue-400 active:bg-gray-200 rounded-sm pl-1 pr-3 py-2"
            onClick={() => {
              window.scrollTo(0, 0);
              setPage((page) => page - 1);
            }}
          >
            <ArrowIcon className="fill-tertiary -scale-100" />
            Anterior
          </button>
        )}
        {items && (
          <div className="px-4">
            <span className="bg-secondary-dark font-medium text-gray-600 text-lg py-2 px-3 mr-1">
              {page + 1}
            </span>
            <span className="text-lg text-gray-600 font-light">
              de {maxPages}
            </span>
          </div>
        )}

        {page < maxPages - 1 && (
          <button
            className="flex text-tertiary font-normal border border-transparent hover:bg-secondary-dark  active:border active:border-blue-400 active:bg-secondary-darker rounded-sm pl-3 pr-1 py-2"
            onClick={() => {
              window.scrollTo(0, 0);
              setPage((page) => page + 1);
            }}
          >
            Seguinte
            <ArrowIcon className="fill-tertiary" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Items;
