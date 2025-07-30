import { Stack } from "expo-router";
import { View } from "react-native";
import NavBar from "./Components/NavBar";

export default function RootLayout() {

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "My Trips", headerTitleAlign: "center" }} />
          <Stack.Screen name="new-trip" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="calendar" options={{ title: "Calendar", headerTitleAlign: "center" }} />
          <Stack.Screen name="settings" options={{ title: "Settings", headerTitleAlign: "center" }} />
          <Stack.Screen name="edit-trip" options={{ title: "Edit Trip", headerTitleAlign: "center" }} />
        </Stack>
      </View>
      <NavBar />
    </View>
  );
}
