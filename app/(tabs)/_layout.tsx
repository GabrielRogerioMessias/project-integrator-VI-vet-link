import { useState } from "react";
import { Stack } from "expo-router";
import GlobalLayout from "../global/layout";
import { TouchableOpacity, View } from "react-native";
import MenuTab from "../assets/menu.svg";
import HomeMenu from "../(tabs)/home/menu";

const RootLayout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  //   return (
  //     <GlobalLayout>
  //       {/* <Stack.Screen
  //         name="pathologies/index"
  //         options={{ headerTitle: "Zoonoses" }}
  //       /> */}
  //     </GlobalLayout>
  //   );
};

// export default RootLayout;
