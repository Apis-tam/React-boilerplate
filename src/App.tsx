import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/reduxHooks";

import * as action from "./action/pokemon";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action.fetchPokemon("1"));
  }, [dispatch]);

  return <div className="App"></div>;
};

export default App;
