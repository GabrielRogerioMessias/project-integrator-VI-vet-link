import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./src/pages/login";
import { globalStyles } from "./src/global/styles";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import SignUp from "./src/pages/signup";
import Profile from "./src/pages/profile";
import Pathologies from "./src/pages/pathologies";
import FeedBackApp from "./src/pages/feedback-app";


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
      <SignUp />
      <FeedBackApp />
      <StatusBar style="auto" />
    </View>
  );
}
