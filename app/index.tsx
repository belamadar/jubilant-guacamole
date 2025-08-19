import { repo } from "@/assets/db/repo";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  let travel_data: any[] = [];
  const [err, setError] = useState("");

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "white"
    },
    
    scroll_container: {
      padding: 20,
      gap: 5
    }
  });

  try {
    travel_data = repo.getAllTrips();
  } catch (error) {
    console.log(error);
    setError(error instanceof Error ? error.message : String(error));
  }

  const promptDelete = () => {
    Alert.prompt(
      "Delete all trips",
      "Are you sure you want to delete all trips?",
      [
        { text: "Cancel", style: "destructive", onPress: () => { } },
        {
          text: "Delete",
          onPress: () => {
            repo.deleteAllTrips();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>

      {/*Display travel data or appropriate message if no data exists*/}
      {travel_data.length === 0 ? (
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>Welcome!</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Add your trips here!</Text>
          <Link href="/new-trip" asChild>
            <Button mode="contained" icon="plus" buttonColor="#994c00" textColor="white" contentStyle={{ flexDirection: "row" }}>Create a new trip</Button>
          </Link>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll_container}>
          {travel_data.map((item: any, index: number) => (
            <Travel_Info key={index} location={item.destination} date={item.start_date} progress={70} />
          ))}
          <Button mode="contained" buttonColor="#994c00" textColor="white" onPress={() => promptDelete}>Delete all trips</Button>
        </ScrollView>
      )}

      {err && (
        <Text style={{ textAlign: "center" }}>An error occured</Text>
      )}

      {/*For testing on expo go*/}
      {/* <Link href="/trip-items" asChild>
          <Button mode="contained" buttonColor="#994c00">Done</Button>
        </Link> */}

    </View>
  );
}