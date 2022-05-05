import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "contexts/StateContext";
import logo from "static/images/logo-mini.png";
import { ReactComponent as MagnifierIcon } from "static/icons/magnifier.svg";
import { SearchButton } from "./style";

const Header = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const [valueToSearch, setValueToSearch] = useState("");

  const gotoMovies = () => {
    navigate("/");
    setValueToSearch("");
    window.scrollTo(0, 0);
  };

  const search = async (e) => {
    e.preventDefault();
    if (valueToSearch) {
      dispatch({ type: "LOADING", payload: true });
      navigate(`/items?search=/${valueToSearch}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header className="flex fixed items-center justify-center w-full bg-primary top-0 h-16 z-10">
      <div className="flex container max-w-5xl">
        <div
          className="ml-3 sm:ml-0 bg-tertiary rounded-sm px-2 cursor-pointer"
          onClick={() => gotoMovies()}
        >
          <img src={logo} alt="logo" />
        </div>
        <form
          className="relative flex-grow mx-2 sm:mx-5"
          onSubmit={(e) => search(e)}
        >
          <input
            className="py-1 pl-3 block w-full appearance-none leading-normal border-2 border-transparent focus:outline-none focus:border-tertiary text-left select-none truncate bg-white shadow-md"
            placeholder="Buscar produtos, marcas e muito mais…"
            onChange={({ target }) => setValueToSearch(target.value)}
          />
          <SearchButton
            className="cursor-pointer absolute inset-y-0 right-0 px-4 flex items-center"
            type="submit"
          >
            <MagnifierIcon className="text-gray-600 fill-current w-4 h-4" />
          </SearchButton>
        </form>
      </div>
    </header>
  );
};

export default Header;
