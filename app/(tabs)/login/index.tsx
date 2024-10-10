import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icon.png";

export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.topContent}>
          <Image source={Logo} style={style.logo} resizeMode="contain" />
          <View style={style.logoText}>
            <Text style={style.smallText}>VET</Text>
            <Text style={style.bigText}>LINK</Text>
          </View>
        </View>
        <View style={style.midContent}>
          <View style={style.data}>
            <Text style={style.label}>EMAIL</Text>
            <View style={style.boxInput}>
              <MaterialIcons name="email" style={style.icon} />
              <TextInput
                style={style.input}
                placeholder="nome@exemplo.com.br"
              />
            </View>
          </View>
          <View style={style.data}>
            <Text style={style.label}>SENHA</Text>
            <View style={style.boxInput}>
              <MaterialIcons name="lock" style={style.icon} />
              <TextInput style={style.input} placeholder="Senha" />
              <MaterialCommunityIcons name="eye" style={style.icon} />
            </View>
            <TouchableOpacity style={style.lostPasswordContainer}>
              <Text style={style.lostPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.botContent}>
          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.btnText}>Iniciar sessão</Text>
          </TouchableOpacity>
          <Text style={style.infoText}>OU</Text>
          <View style={style.signupContent}>
            <Text style={style.signupText}>Não possui cadastro?</Text>
            <TouchableOpacity style={style.signupBtn}>
              <Text style={style.btnText}>Cadastre-se agora!</Text>
            </TouchableOpacity>
          </View>
          <Text style={style.infoText}>v1.0</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
