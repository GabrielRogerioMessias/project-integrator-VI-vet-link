import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./login";
import { globalStyles } from "../global/styles";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import SignUp from "./signup";
import Profile from "./profile";
import Pathologies from "./pathologies";
import FeedBackApp from "./feedback-app";
import ChangePassword from "./change-password";
import Home from "./home";
import ChangeRegister from "./change-register";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container}>
      {/* <Login /> */}
      <ChangeRegister />
      {/* <Home /> */}
      <StatusBar style="auto" />
    </View>
  );

}
