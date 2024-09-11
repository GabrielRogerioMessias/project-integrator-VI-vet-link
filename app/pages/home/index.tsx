import { Button, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

const Home = () => {
  function signOut() {
    auth().signOut();
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={signOut} title="Sair" />
    </View>
  );
};

export default Home;
