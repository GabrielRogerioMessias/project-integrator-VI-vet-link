import { Stack } from "expo-router";
import GlobalLayout from "../global/layout";
import { TouchableOpacity } from "react-native";
import { themes } from "../global/themes";

const RootLayout = () => {
  return (
    <GlobalLayout>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Olá, [nome]",
          headerLeft: () => <TouchableOpacity></TouchableOpacity>,
        }}
      />
      <Stack.Screen
        name="pathologies/index"
        options={{ headerTitle: "Zoonoses" }}
      />
    </GlobalLayout>
  );
};

export default RootLayout;
