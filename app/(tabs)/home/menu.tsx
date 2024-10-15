import React from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { menuStyles } from "./styles";
import Logo from "../../assets/icon.svg";

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
                <Logo width={80} height={80} />
                <View style={menuStyles.menuTitleContent}>
                  <Text style={menuStyles.menuMiniTitle}>VET</Text>
                  <Text style={menuStyles.menuBigTitle}>LINK</Text>
                </View>
                <Text style={menuStyles.menuExit}>Sair</Text>
              </View>
              <View style={menuStyles.botContent}>
                <Text style={menuStyles.menuItem}>Perfil</Text>
                <Text style={menuStyles.menuItem}>Avaliar App</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HomeMenu;
