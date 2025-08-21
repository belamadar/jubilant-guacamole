import { repo } from "@/assets/db/repo";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { Button, IconButton } from "react-native-paper";

function EditTrip({ trip, onBack }: any) {
  let transports: any[] = [];
  let activities: any[] = [];
  const [err, setError] = useState("");

  const getData = () => {
    try {
      transports = repo.getTransport(trip.destination);
      activities = repo.getActivity(trip.destination);
      
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
      {trip !== null && (
        <View>
          <Text style={{ fontWeight: "bold" }}>{trip.destination}</Text>
          <Text>{trip.start_date}</Text>
          <Text>{trip.end_date}</Text>
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

      <Button mode="contained" buttonColor="#994c00" textColor="white" onPress={onBack}>Go back</Button>

      {err && (
        <Text style={{ textAlign: "center" }}>An error occured</Text>
      )}

    </ScrollView>
  );
}

export default function Index() {
  const [travelData, setTravelData] = useState<any[]>([]);
  const [err, setError] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const loadTrips = () => {
    try {
      let data = repo.getAllTrips();
      setTravelData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }
  }

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "white"
    },

    scroll_container: {
      padding: 20,
      gap: 5
    },

    outer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5,
      marginRight: 5,
      padding: 5,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#dcdcdc",
      backgroundColor: "#fff5ee",
    },

    innerLeft: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "50%",
      alignItems: "flex-start",
      padding: 2,
      gap: 5
    },

    innerRight: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10
    }
  });

  const promptDeleteOne = (dest: string) => {
    Alert.alert(
      `Delete trip ${dest}?`,
      "Are you sure you want to delete this trip?",
      [
        { text: "Cancel", style: "destructive", onPress: () => { } },
        {
          text: "Delete",
          onPress: () => {
            repo.deleteTrip(dest);

            //ON DELETE CASCADE currently not working, temporary fix
            repo.deleteTransport(dest);
            repo.deleteActivity(dest);

            setTravelData(prev => {
              return prev.filter(trip => trip.destination !== dest);
            });
          },
        },
      ]
    );
  }

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <View style={styles.container}>
      {/*Display travel data or appropriate message if no data exists*/}
      {travelData.length === 0 ? (

        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>Welcome!</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>Add your trips here!</Text>
          <Link href="/new-trip" asChild>
            <Button mode="contained" icon="plus" buttonColor="#994c00" textColor="white" contentStyle={{ flexDirection: "row" }}>Create a new trip</Button>
          </Link>

        </View>
      ) : (

        <ScrollView contentContainerStyle={styles.scroll_container}>
          {travelData.map((item: any, index: number) => (
            <React.Fragment key={index}>

              {editIndex === index ? (

                <EditTrip trip={item} onBack={() => setEditIndex(null)} />

              ) : editIndex === null ? (
                <View style={styles.outer}>

                  <View style={styles.innerLeft}>

                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.destination}
                    </Text>
                    <Text style={{ fontSize: 16 }}>{item.start_date}</Text>

                  </View>

                  <View style={styles.innerRight}>

                    <CircularProgress
                      value={70}
                      showProgressValue={false}
                      radius={15}
                      duration={0}
                      activeStrokeColor={"#994c00"}
                      inActiveStrokeColor={"#ffcc99"}
                      activeStrokeWidth={7}
                      inActiveStrokeWidth={7}
                      maxValue={100}
                    />

                    <IconButton icon="pencil" iconColor="white" containerColor="#994c00" onPress={() => setEditIndex(index)}/>
                    <IconButton icon="trash-can" iconColor="white" containerColor="#994c00" onPress={() => promptDeleteOne(item.destination)}/>

                  </View>

                </View>
              ) : null}

            </React.Fragment>
          ))}
        </ScrollView>
      )}

      {err && (
        <Text style={{ textAlign: "center" }}>An error occured</Text>
      )}

    </View>
  );
}