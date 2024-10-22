import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Login from "./login";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { themes } from "../global/themes";
import { globalStyles } from "../global/styles";
import { ActivityIndicator, View } from "react-native";
import Home from "./home";
import SignUp from "./signup";

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
