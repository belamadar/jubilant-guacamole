import { ScrollView, StyleSheet, Text, View } from "react-native";
import BackButton from "./Components/backButton";

export default function Index() {
  const styles = StyleSheet.create({

  });

  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", padding: 20, gap: "45%" }}>
        <BackButton />
        <Text style={{ fontSize: 32 }}>My Trips</Text>
      </View>
    </ScrollView>
  );
}
