import { Stack } from "expo-router";
import { themes } from "../global/themes";
import { Text, TouchableOpacity } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Olá, [nome]",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: themes.fonts.title,
            color: themes.colors.darkGreen,
          },
          headerStyle: {
            backgroundColor: themes.colors.background,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity>
              <Text>Teste</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="pathologies/index"
        options={{
          headerTitle: "Zoonoses",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
