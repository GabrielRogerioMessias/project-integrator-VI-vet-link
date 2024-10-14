import { Stack } from "expo-router";
import { themes } from "../global/themes";
import { ReactNode, useState } from "react";
import BackArrow from "../assets/back.svg";
import MenuTab from "../assets/menu.svg"; // Importando o ícone do menu
import { StyleSheet, TouchableOpacity, View } from "react-native";
import HomeMenu from "../(tabs)/home/menu"; // Importar o menu
import { useNavigation } from "@react-navigation/native";
import React from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const navigation = useNavigation();

  // Controlando a visibilidade do menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: themes.fonts.title,
          color: themes.colors.darkGreen,
        },
        headerStyle: {
          backgroundColor: themes.colors.background,
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 8 }}
            onPress={navigation.goBack}
          >
            <BackArrow width={20} height={20} />
          </TouchableOpacity>
        ),
      }}
    >
      {children}
    </Stack>
  );
};

export default GlobalLayout;
