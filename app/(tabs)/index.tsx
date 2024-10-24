import { StatusBar } from "expo-status-bar";
import React from "react";
import Login from "./login";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Login />
      <StatusBar style="auto" />
    </>
  );
}
