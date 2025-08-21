import { repo } from "@/assets/db/repo";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";


export default function EditTrip() {

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "white", 
      alignItems: "center", 
      justifyContent: "center"
    }
  });

  const params = useLocalSearchParams<{ destination?: string }>();
  const [trip, setTrip] = useState<any | null>(null);
  const [transport, setTransport] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [err, setError] = useState("");

  const getData = () => {
    try {
      const t = repo.getTrip(params.destination ?? "");
      const ts = repo.getTransport(params.destination ?? "");
      const act = repo.getActivity(params.destination ?? "");

      setTrip(t);
      setTransport(ts);
      setActivities(act);

    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }
  }

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }
  }, [params.destination]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontSize: 64, fontWeight: "bold" }}>Edit Trip</Text>
      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Trip Information</Text>
      {trip && (
        <View>
          <Text style={{ fontWeight: "bold" }}>{trip.destination}</Text>
          <Text>{trip.start_date}</Text>
          <Text>{trip.end_date}</Text>
        </View>
      )}

      <Text style={{ fontWeight: "bold", fontSize: 32 }}>Transportation</Text>
      {transport.length > 0 && (
        transport.map((item, index) => (
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