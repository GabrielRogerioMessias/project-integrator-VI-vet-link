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
import { useState } from "react";
import MenuTab from "../../assets/menu.svg";
import React from "react";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Home",
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
                {/* <HomeButton
                onPress={() => alert("Analises clínicas")}
                imageSource={require("../../assets/Blood Sample.png")}
                buttonText="patologias"
              />
              <HomeButton
                onPress={() => alert("Prescrição")}
                imageSource={require("../../assets/Treatment.png")}
                buttonText="Prescrição"
              />
              <HomeButton
                onPress={() => alert("Emergencia")}
                imageSource={require("../../assets/Veterinarian.png")}
                buttonText="Emergência"
              /> */}
              </View>
            </View>
          </View>
          <HomeMenu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
