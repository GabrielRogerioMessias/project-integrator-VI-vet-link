import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Login from "./app/pages/login";
import { globalStyles } from "./app/global/styles";
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
    <View style={globalStyles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}
