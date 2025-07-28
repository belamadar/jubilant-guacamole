import { ScrollView, StyleSheet, Text, View } from "react-native";
import TripButton from "./Components/TripButton";

export default function TripType() {
    const transportation = [
        { title: "Bus", icon: "bus-outline" },
        { title: "Airplane", icon: "airplane-outline" },
        { title: "Ferry", icon: "boat-outline" },
        { title: "Car", icon: "car-outline" }
    ];

    const activities = [
        { title: "Camping", icon: "bonfire-outline" },
        { title: "Surfing", icon: "add-circle-outline" },
        { title: "Sailing", icon: "boat-outline" },
        { title: "Beach", icon: "sunny-outline" },
        { title: "Dress-up event", icon: "body-outline" },
        { title: "Outdors", icon: "partly-sunny-outline" },
        { title: "Hiking", icon: "footsteps-outline" }
    ];

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 10,
            margin: 30
        }
    });

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white" }}>
            <Text style={{ marginTop: 10, textAlign: "center" }}>Transportation</Text>
            <View style={styles.container}>
                {transportation.map((item, index) =>
                    <TripButton key={index} icon={item.icon} text={item.title} link="" />
                )}
            </View>

            <Text style={{ marginTop: 10, textAlign: "center" }}>Activities</Text>
            <View style={styles.container}>
                {activities.map((item, index) =>
                    <TripButton key={index} icon={item.icon} text={item.title} link="" />
                )}
            </View>
        </ScrollView>
    );
}