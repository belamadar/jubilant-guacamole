import { Stack } from "expo-router";
import { View } from "react-native";
import NavBar from "./Components/NavBar";

export default function RootLayout() {

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="my-trips" options={{ title: "My Trips" }} />
          <Stack.Screen name="new-trip" options={{ title: "New Trip" }} />
          <Stack.Screen name="calendar" options={{ title: "Calendar" }} />
          <Stack.Screen name="settings" options={{ title: "Settings" }} />
          <Stack.Screen name="edit-trip" options={{ title: "Edit Trip" }} />
        </Stack>
      </View>
      <NavBar />
    </View>
  );
}
