import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavBar from "./Components/NavBar";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  });

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "My Trips", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="new-trip" options={{ title: "New Trip", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="trip-type" options={{ title: "New Trip", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="trip-items" options={{ title: "New Trip", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="calendar" options={{ title: "Calendar", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="settings" options={{ title: "Settings", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
        <Stack.Screen name="edit-trip" options={{ title: "My Trips", headerTitleAlign: "center", headerStyle: { backgroundColor: "#fff5ee" } }} />
      </Stack>
      <View style={styles.container}>
        <NavBar />
      </View>
      
    </>
  );
}
