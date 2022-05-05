import React from "react";
import Routes from "./utils/Routes";
import { StateProvider, StateConsumer } from "contexts/StateContext";
import Loader from "components/Loader";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <StateConsumer>
          {({ state }) => (
            <>
              <Routes />
              {state.loading && <Loader />}
            </>
          )}
        </StateConsumer>
      </StateProvider>
    </div>
  );
}

export default App;
