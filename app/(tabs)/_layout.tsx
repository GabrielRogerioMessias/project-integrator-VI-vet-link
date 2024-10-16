import { useState } from "react";
import { Stack } from "expo-router";
import GlobalLayout from "../global/layout";

const RootLayout = () => {
  return (
    <GlobalLayout>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="pathologies/index"
        options={{ headerTitle: "Zoonoses" }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ headerTitle: "Perfil de Usuário" }}
      />
      <Stack.Screen
        name="feedback-app/index"
        options={{ headerTitle: "Avaliar App" }}
      />
      <Stack.Screen
        name="change-register/index"
        options={{ headerTitle: "Alterar Cadastro" }}
      />
      <Stack.Screen
        name="change-password/index"
        options={{ headerTitle: "Alterar Senha" }}
      />
    </GlobalLayout>
  );
};

export default RootLayout;
