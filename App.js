import React from "react";
import { StackNavigator } from "react-navigation";
import Game from "./Game";

const App = StackNavigator(
  {
    Game: { screen: Game },
  },
  {
    headerMode: "none",
  },
);

export default App;
