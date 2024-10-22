import React from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { menuStyles } from "./styles";
import LogoIcon from "../../assets/icon.svg";
import LikeIcon from "../../assets/like.svg";
import UserIcon from "../../assets/user.svg";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

interface HomeMenuProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

const HomeMenu = ({ isMenuVisible, toggleMenu }: HomeMenuProps) => {
  const signOutUser = async () => {
    try {
      await auth().signOut();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao sair: ", error);
    }
  };

  return (
    <Modal
      visible={isMenuVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleMenu}
    >
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={menuStyles.menuContainer}>
          <TouchableWithoutFeedback>
            <View style={menuStyles.menuContent}>
              <View style={menuStyles.topContent}>
                <LogoIcon width={80} height={80} />
                <View style={menuStyles.menuTitleContent}>
                  <Text style={menuStyles.menuMiniTitle}>VET</Text>
                  <Text style={menuStyles.menuBigTitle}>LINK</Text>
                </View>
                <TouchableOpacity
                  style={menuStyles.exitBtn}
                  onPress={() => {
                    toggleMenu();
                    signOutUser();
                  }}
                >
                  <MaterialCommunityIcons
                    name="location-exit"
                    style={menuStyles.exitIcon}
                  />
                  <Text style={menuStyles.exitText}>Sair</Text>
                </TouchableOpacity>
              </View>
              <View style={menuStyles.botContent}>
                <TouchableOpacity
                  style={menuStyles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    router.push("/profile");
                  }}
                >
                  <AntDesign name="user" style={menuStyles.icon} />
                  <Text style={menuStyles.menuText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={menuStyles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    router.push("/feedback-app");
                  }}
                >
                  <AntDesign name="like2" style={menuStyles.icon} />
                  <Text style={menuStyles.menuText}>Avaliar App</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HomeMenu;
