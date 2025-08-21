import { repo } from "@/assets/db/repo";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function EditTrip() {
  const params = useLocalSearchParams<any>();
  let transports: any[] = [];
  let activities: any[] = [];
  const [err, setError] = useState("");

  const getData = () => {
    try {
      transports = repo.getTransport(params.destination);
      activities = repo.getActivity(params.destination);

    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }
  }

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
      setError(error instanceof Error ? error.message : String(error));
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 64, fontWeight: "bold" }}>Edit Trip</Text>
      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Trip Information</Text>
      {params !== null && (
        <View>
          <Text style={{ fontWeight: "bold" }}>{params.destination}</Text>
          <Text>{params.start_date}</Text>
          <Text>{params.end_date}</Text>
        </View>
      )}

      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Transportation</Text>
      {transports.length > 0 && (
        transports.map((item, index) => (
          <Text key={index}>{item.transport_id}</Text>
        ))
      )}

      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Activities</Text>
      {activities.length > 0 && (
        activities.map((item, index) => (
          <Text key={index}>{item.activity_id}</Text>
        ))
      )}
    
      <Link href="/" dismissTo asChild>
        <Button mode="contained" buttonColor="#994c00" textColor="white">Finish</Button>
      </Link>
      
      {err && (
        <Text style={{ textAlign: "center" }}>An error occured</Text>
      )}

    </ScrollView>
  );
}