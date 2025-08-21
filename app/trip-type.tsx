import { repo } from "@/assets/db/repo";
import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";


export default function TripType() {

    const params = useLocalSearchParams<{ destination?: string }>();
    const [transportation, setTransportation] = useState<string[]>([]);
    const [activities, setActivities] = useState<string[]>([]);

    const [pressed, setPressed] = useState(Array(10).fill(false));

    const done = transportation.length === 0 || activities.length === 0;
    const [next, setNext] = useState(true);

    const [err, setErr] = useState("");

    const styles = StyleSheet.create({
        main_Container: {
            display: "flex",
            flex: 1,
            paddingHorizontal: 40,
            backgroundColor: "white"
        },

        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 5
        },

        not_pressed: {
            padding: 10,
            backgroundColor: "#ffd1c5"
        },

        pressed: {
            padding: 10,
            backgroundColor: "#eF9a9a"
        }
    });

    const pushTransport = (item: string, index: number) => {
        setTransportation(prev => {
            if (!prev.includes(item)) {
                return [...prev, item];
            } else {
                return prev.filter(transport => transport !== item);
            }
        });

        setPressed(prev => {
            const newPressed = [...prev];
            newPressed[index] = !newPressed[index];
            return newPressed;
        });
    }

    const pushActivity = (item: string, index: number) => {
        setActivities(prev => {
            if (!prev.includes(item)) {
                return [...prev, item];
            } else {
                return prev.filter(activity => activity !== item);
            }
        });

        setPressed(prev => {
            const newPressed = [...prev];
            newPressed[index] = !newPressed[index];
            return newPressed;
        });
    }

    const addData = async () => {
        try {
            const destination = params.destination ?? "";
            repo.setTripTransports(destination, transportation);
            repo.setTripActivities(destination, activities);
            setNext(false);
        } catch (error) {
            setErr(error instanceof Error ? error.message : String(error));
        }
    }

    return (
        <View style={styles.main_Container}>
            <ScrollView>
                <Text style={{ marginTop: 10 }}>Transportation</Text>
                <View style={styles.container}>

                    <Button mode="contained" textColor="black" icon="bus" onPress={() => pushTransport("Bus", 0)} contentStyle={
                        pressed[0] ? styles.pressed : styles.not_pressed
                    }>Bus</Button>

                    <Button mode="contained" textColor="black" icon="airplane" onPress={() => pushTransport("Airplane", 1)} contentStyle={
                        pressed[1] ? styles.pressed : styles.not_pressed
                    }>Airplane</Button>

                    <Button mode="contained" textColor="black" icon="ferry" onPress={() => pushTransport("Ferry", 2)} contentStyle={
                        pressed[2] ? styles.pressed : styles.not_pressed
                    }>Ferry</Button>

                    <Button mode="contained" textColor="black" icon="car" onPress={() => pushTransport("Car", 3)} contentStyle={
                        pressed[3] ? styles.pressed : styles.not_pressed
                    }>Car</Button>

                </View>

                <Text style={{ marginTop: 10 }}>Activities</Text>
                <View style={styles.container}>

                    <Button mode="contained" textColor="black" icon="campfire" onPress={() => pushActivity("Camping", 4)} contentStyle={
                        pressed[4] ? styles.pressed : styles.not_pressed
                    }>Camping</Button>

                    <Button mode="contained" textColor="black" icon="surfing" onPress={() => pushActivity("Surfing", 5)} contentStyle={
                        pressed[5] ? styles.pressed : styles.not_pressed
                    }>Surfing</Button>

                    <Button mode="contained" textColor="black" icon="ferry" onPress={() => pushActivity("Sailing", 6)} contentStyle={
                        pressed[6] ? styles.pressed : styles.not_pressed
                    }>Sailing</Button>

                    <Button mode="contained" textColor="black" icon="beach" onPress={() => pushActivity("Beach", 7)} contentStyle={
                        pressed[7] ? styles.pressed : styles.not_pressed
                    }>Beach</Button>

                    <Button mode="contained" textColor="black" icon="tie" onPress={() => pushActivity("Dress-up event", 8)} contentStyle={
                        pressed[8] ? styles.pressed : styles.not_pressed
                    }>Dress-up event</Button>

                    <Button mode="contained" textColor="black" icon="sunglasses" onPress={() => pushActivity("Outdoors", 9)} contentStyle={
                        pressed[9] ? styles.pressed : styles.not_pressed
                    }>Outdoors</Button>

                    <Button mode="contained" textColor="black" icon="hiking" onPress={() => pushActivity("Hiking", 10)} contentStyle={
                        pressed[10] ? styles.pressed : styles.not_pressed
                    }>Hiking</Button>

                </View>

                <View style={{ marginTop: 10, gap: 10 }}>
                    <Button mode="contained" buttonColor="#994c00" disabled={done} onPress={addData}>Done</Button>

                    <Link href={{ pathname: "/trip-items", params: { trip: params.destination, transport: transportation, activity: activities } }} push asChild>
                        <Button mode="contained" buttonColor="#994c00" disabled={next}>Next</Button>
                    </Link>
                </View>

            </ScrollView>

            {err && (
                <Text style={{ textAlign: "center" }}>An error occured</Text>
            )}

        </View>
    );
}