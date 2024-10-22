import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import HomeButton from "../../components/homeButton";
import { router, Stack } from "expo-router";
import { globalStyles } from "../../global/styles";
import HomeMenu from "./menu";
import { useState, useEffect } from "react";
import MenuTab from "../../assets/menu.svg";
import React from "react";
import { StatusBar } from "expo-status-bar";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [firstName, setFirstName] = useState("");

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const unsubscribe = firestore()
        .collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            if (userData && userData.name) {
              setFirstName(userData.name);
            }
          }
        });

      return () => unsubscribe();
    }
  }, []);

  const getDisplayedName = () => {
    if (firstName) {
      return firstName.length > 10
        ? firstName.substring(0, 10) + "..."
        : firstName;
    }
    return "Usuário";
  };

  return (
    <>
      <StatusBar style="auto" backgroundColor="#F0F0F0" />
      <Stack.Screen
        options={{
          headerTitle: `Olá, ${getDisplayedName()}`,
          headerLeft: () => (
            <TouchableOpacity style={{ paddingLeft: 8 }} onPress={toggleMenu}>
              <MenuTab width={20} height={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <View style={style.container}>
            <View style={style.content}>
              <View style={style.buttonsContainer}>
                <HomeButton
                  onPress={() => router.push("/pathologies")}
                  imageSource={require("../../assets/Body Cells.png")}
                  buttonText="Zoonoses"
                />
              </View>
            </View>
          </View>
          <HomeMenu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
