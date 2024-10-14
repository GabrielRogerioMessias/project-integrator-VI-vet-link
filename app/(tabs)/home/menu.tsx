import React from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import { menuStyles } from "./styles";

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
      {/* Envolvendo toda a View com TouchableWithoutFeedback */}
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={menuStyles.menuContainer}>
          {/* Prevenindo que o toque dentro do menu feche o modal */}
          <TouchableWithoutFeedback>
            <View style={menuStyles.menuContent}>
              <Text style={menuStyles.menuTitle}>VETLINK</Text>
              <Text style={menuStyles.menuItem}>Perfil</Text>
              <Text style={menuStyles.menuItem}>Avaliar app</Text>
              <Text style={menuStyles.menuItem}>Sair</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HomeMenu;
