import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavBar from "./Components/NavBar";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "shite",
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  });

  return (
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "My Trips", headerTitleAlign: "center" }} />
          <Stack.Screen name="new-trip" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="trip-type" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="trip-items" options={{ title: "New Trip", headerTitleAlign: "center" }} />
          <Stack.Screen name="calendar" options={{ title: "Calendar", headerTitleAlign: "center" }} />
          <Stack.Screen name="settings" options={{ title: "Settings", headerTitleAlign: "center" }} />
          <Stack.Screen name="edit-trip" options={{ title: "Edit Trip", headerTitleAlign: "center" }} />
        </Stack>
        <NavBar/>
      </View>
  );
}
