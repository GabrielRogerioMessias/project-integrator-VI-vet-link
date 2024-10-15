import { useState } from "react";
import { Stack } from "expo-router";
import GlobalLayout from "../global/layout";

const RootLayout = () => {
  return (
    <GlobalLayout>
      <Stack.Screen
        name="pathologies/index"
        options={{ headerTitle: "Zoonoses" }}
      />
    </GlobalLayout>
  );
};

export default RootLayout;
