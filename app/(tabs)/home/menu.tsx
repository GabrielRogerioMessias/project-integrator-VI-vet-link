import React, { useEffect, useRef } from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  menuStyles,
  slideInAnimation,
  slideOutAnimation,
  fadeInAnimation,
  fadeOutAnimation,
} from "./styles";
import LogoIcon from "../../assets/icon.svg";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

interface HomeMenuProps {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

const HomeMenu = ({ isMenuVisible, toggleMenu }: HomeMenuProps) => {
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const signOutUser = async () => {
    try {
      await auth().signOut();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao sair: ", error);
    }
  };

  const closeMenuWithAnimation = () => {
    Animated.parallel([
      slideOutAnimation(slideAnim),
      fadeOutAnimation(opacityAnim),
    ]).start(() => {
      toggleMenu();
    });
  };

  useEffect(() => {
    if (isMenuVisible) {
      Animated.parallel([
        slideInAnimation(slideAnim),
        fadeInAnimation(opacityAnim),
      ]).start();
    } else {
      Animated.parallel([
        slideOutAnimation(slideAnim),
        fadeOutAnimation(opacityAnim),
      ]).start();
    }
  }, [isMenuVisible]);

  return (
    <Modal
      visible={isMenuVisible}
      transparent={true}
      onRequestClose={closeMenuWithAnimation}
      animationType="none"
    >
      <TouchableWithoutFeedback onPress={closeMenuWithAnimation}>
        <Animated.View
          style={[menuStyles.menuContainer, { opacity: opacityAnim }]}
        >
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                menuStyles.menuContent,
                { transform: [{ translateX: slideAnim }] },
              ]}
            >
              <View style={menuStyles.topContent}>
                <LogoIcon width={80} height={80} />
                <View style={menuStyles.menuTitleContent}>
                  <Text style={menuStyles.menuMiniTitle}>VET</Text>
                  <Text style={menuStyles.menuBigTitle}>LINK</Text>
                </View>
                <TouchableOpacity
                  style={menuStyles.exitBtn}
                  onPress={() => {
                    closeMenuWithAnimation();
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
                    closeMenuWithAnimation();
                    router.push("/profile");
                  }}
                >
                  <AntDesign name="user" style={menuStyles.icon} />
                  <Text style={menuStyles.menuText}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={menuStyles.menuItem}
                  onPress={() => {
                    closeMenuWithAnimation();
                    router.push("/feedback-app");
                  }}
                >
                  <AntDesign name="like2" style={menuStyles.icon} />
                  <Text style={menuStyles.menuText}>Avaliar App</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default HomeMenu;
