import { Stack, useRouter, useSegments } from "expo-router";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log("onAuthStateChanged", user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[1] === "home";

    if (user && !inAuthGroup) {
      router.replace("/pages/home/");
    } else if (!user && inAuthGroup) {
      router.replace("/pages/login");
    }
  }, [user, initializing]);

  if (initializing)
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
