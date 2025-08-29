import React from "react";
import { useFonts } from "expo-font";
import "./global.css";
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";

export default function App() {

  const [fontsLoaded] = useFonts({
    GilroyRegular: require("./assets/fonts/Gilroy-Regular.ttf"),
    GilroyHeavy: require("./assets/fonts/Gilroy-Heavy.ttf"),
    SairaCondensedRegular: require("./assets/fonts/SairaCondensed-Regular.ttf"),
    SairaCondensedBold: require("./assets/fonts/SairaCondensed-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SignUp />
  );
}