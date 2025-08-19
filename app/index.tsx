// import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-paper";
import { repo } from "@/assets/db/repo";
import { useState } from "react";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  let travel_data: any[] = [];
  const [err, setError] = useState("");

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: "white",
      gap: 5,
      padding: 20
    }
  });

  try {
    travel_data = repo.getAllTrips();
  } catch (error) {
    console.log(error);
    setError(error instanceof Error ? error.message : String(error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/*Display travel data or appropriate message if no data exists*/}
      {err.length > 0 ? (
        <View>
          <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>No Travel information available</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Select New Trip from below to add a Trip</Text>
        </View>
      ) : (
        travel_data.map((item: any, index: number) => (
          <Travel_Info key={index} location={item.destination} date={item.start_date} progress={70} />
        ))
      )}

      {/*For testing on expo go*/}
      {/* <Link href="/trip-items" asChild>
          <Button mode="contained" buttonColor="#994c00">Done</Button>
        </Link> */}

    </ScrollView>
  );
}