import { repo } from "@/assets/db/repo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function TripType() {
    const styles = StyleSheet.create({
        main_Container: {
            display: "flex",
            flex: 1,
            backgroundColor: "white",
            paddingHorizontal: 40,
            gap: 10
        },

        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 5,
        },

        not_pressed: {
            padding: 10,
            borderWidth: 1,
        },

        pressed: {
            padding: 10,
            borderWidth: 1,
            borderColor: "blue"
        }
    });

    const getDest = async () => {
        return await AsyncStorage.getItem('destination');
    }

    let transportation: string[] = [];
    let activities: string[] = [];
    const done = transportation.length === 0 && activities.length === 0;
    let next: boolean = true;

    const [err, setErr] = useState("");

    const pushTransport = (item: string) => {
        if (!transportation.includes(item)) {
            transportation.push(item);
        } else {
            transportation.filter((transport) => item !== transport);
        }
    }

    const pushActivity = (item: string) => {
        if (!activities.includes(item)) {
            activities.push(item);
        } else {
            activities.filter((activity) => item !== activity);
        }
    }

    const addData = () => {
        try {
            const destination = getDest().toString();
            repo.setTripTransports(destination, transportation);
            repo.setTripActivities(destination, activities);
            next = !next;
        } catch (error) {
            setErr(error instanceof Error ? error.message : String(error));
        }
    }

    return (
        <View style={styles.main_Container}>
            <ScrollView>
                <Text style={{ marginTop: 10 }}>Transportation</Text>
                <View style={styles.container}>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="bus" contentStyle={
                        transportation.includes("Bus") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushTransport("Bus")}>Bus</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="airplane" contentStyle={
                        transportation.includes("Airplane") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushTransport("Airplane")}>Airplane</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="ferry" contentStyle={
                        transportation.includes("Ferry") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushTransport("Ferry")}>Ferry</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="car" contentStyle={
                        transportation.includes("Car") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushTransport("Car")}>Car</Button>

                </View>

                <Text style={{ marginTop: 10 }}>Activities</Text>
                <View style={styles.container}>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="campfire" contentStyle={
                        activities.includes("Camping") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Camping")}>Camping</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="surfing" contentStyle={
                        activities.includes("Surfing") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Surfing")}>Surfing</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="ferry" contentStyle={
                        activities.includes("Sailing") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Sailing")}>Sailing</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="beach" contentStyle={
                        activities.includes("Beach") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Beach")}>Beach</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="tie" contentStyle={
                        activities.includes("Dress-up event") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Dress-up event")}>Dress-up event</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="sunglasses" contentStyle={
                        activities.includes("Outdoors") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Outdoors")}>Outdoors</Button>

                    <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="hiking" contentStyle={
                        activities.includes("Hiking") ? styles.pressed : styles.not_pressed
                    } onPress={() => pushActivity("Hiking")}>Hiking</Button>

                </View>

                <Button mode="contained" buttonColor="#994c00" disabled={done} onPress={addData}>Done</Button>

                <Link href="/trip-items" asChild>
                    <Button mode="contained" buttonColor="#994c00" disabled={next}>Next</Button>
                </Link>

            </ScrollView>

            {err && (
                <Text style={{ textAlign: "center" }}>An error occured</Text>
            )}

        </View>
    );
}