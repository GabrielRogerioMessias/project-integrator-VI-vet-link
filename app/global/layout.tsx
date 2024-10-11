import { Stack } from "expo-router";
import { themes } from "../global/themes";
import { ReactNode } from "react";
import BackArrow from "../assets/back.svg";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const navigation = useNavigation();

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow width={20} height={20} fill={themes.colors.darkGreen} />
          </TouchableOpacity>
        ),

        contentStyle: {
          paddingTop: 20,
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default GlobalLayout;
