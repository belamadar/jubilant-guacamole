import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, View } from "react-native";
import NavBar from "./Components/NavBar";

export default function RootLayout() {

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "white"
    },

    container: {
      flex: 1,
      position: "relative"
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "My Trips", headerTitleAlign: "center" }} />
          <Stack.Screen name="new-trip" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="trip-type" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="calendar" options={{ title: "Calendar", headerTitleAlign: "center" }} />
          <Stack.Screen name="settings" options={{ title: "Settings", headerTitleAlign: "center" }} />
          <Stack.Screen name="edit-trip" options={{ title: "My Trips", headerTitleAlign: "center" }} />
        </Stack>
        <NavBar />
      </View>
    </SafeAreaView>

  );
}
