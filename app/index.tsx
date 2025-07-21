import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  const styles = StyleSheet.create({

  });

  return (
    <ScrollView contentContainerStyle={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
      <View>
        <View style={{ display: "flex", flexDirection: "row", padding: 20, gap: "45%" }}>
          <Button icon="arrow-back-sharp" text="" style={0} />
          <Text style={{ fontSize: 32 }}>My Trips</Text>
        </View>
        <Travel_Info location="Dublin" date="17.08.2025 - 22.08.2025" />
      </View>
      <NavBar />
    </ScrollView>
  );
}
