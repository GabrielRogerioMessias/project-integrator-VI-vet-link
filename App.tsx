import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, AppRegistry, StyleSheet, View } from "react-native";
import Login from "./app/pages/login";
import { globalStyles } from "./app/global/styles";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import Home from "./app/pages/home";
import { themes } from "./app/global/themes";

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      if (initializing) {
        setInitializing(false);
      }
      setUser(_user);
    });

    return unsubscribe;
  }, [initializing]);

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (initializing) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size={"large"} color={themes.colors.darkGreen} />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {user ? <Home /> : <Login />}
      <StatusBar style="auto" />
    </View>
  );
}
