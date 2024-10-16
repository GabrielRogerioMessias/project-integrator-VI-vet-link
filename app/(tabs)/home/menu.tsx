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

interface HomeMenuProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

const HomeMenu = ({ isMenuVisible, toggleMenu }: HomeMenuProps) => {
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
                <Text style={menuStyles.menuExit}>Sair</Text>
              </View>
              <View style={menuStyles.botContent}>
                <TouchableOpacity
                  style={menuStyles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    router.push("profile");
                  }}
                >
                  <UserIcon width={20} height={20} />
                  <Text style={menuStyles.menuText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={menuStyles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    router.push("feedback-app");
                  }}
                >
                  <LikeIcon width={20} height={20} />
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
