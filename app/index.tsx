import { ScrollView, StyleSheet, Text, View, } from "react-native";
import Button from "./Components/Button";
import NavBar from "./Components/NavBar";

export default function Index() {
  const styles = StyleSheet.create({

  });

  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", padding: 20, gap: "45%" }}>
        <Button icon="arrow-back-sharp" text=""/>
        <Text style={{ fontSize: 32 }}>My Trips</Text>
      </View>
      <NavBar/>
    </ScrollView>
  );
}
