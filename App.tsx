import React from "react";
import { Keyboard,TouchableWithoutFeedback } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";

const App =() => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AppNavigation />
    </TouchableWithoutFeedback>
  );
}

export default App;
