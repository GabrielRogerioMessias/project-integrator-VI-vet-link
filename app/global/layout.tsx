import { Stack } from "expo-router";
import { themes } from "../global/themes";
import { ReactNode } from "react";
import BackArrow from "../assets/back.svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

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
