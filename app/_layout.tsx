import { Stack } from "expo-router";
import { View } from "react-native";
import NavBar from "./Components/NavBar";

export default function RootLayout() {
  return (
    <View style={{display: "flex", flex: 1}}>
      <View style={{display: "flex", flex: 1}}>
        <Stack/>
      </View>
      <NavBar />
    </View>
  );
}
