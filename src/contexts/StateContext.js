import { createContext, useReducer, useMemo } from "react";

export const StateContext = createContext();

const initialState = {
  loading: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <StateContext.Provider value={store}>{children}</StateContext.Provider>
  );
};

export const StateConsumer = StateContext.Consumer;
