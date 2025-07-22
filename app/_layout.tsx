import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import NavBar from "./Components/NavBar";

export default function RootLayout() {
  const styles = StyleSheet.create({
    headerStyle: {
      shadowColor: 'transparent', // this covers iOS
      elevation: 0, // this covers Android
    },
  });

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
