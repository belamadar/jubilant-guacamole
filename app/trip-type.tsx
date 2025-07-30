import { ScrollView, StyleSheet, Text, View } from "react-native";
import TextButton from "./Components/TextButton";
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
        { title: "Surfing", icon: "water-outline" },
        { title: "Sailing", icon: "boat-outline" },
        { title: "Beach", icon: "sunny-outline" },
        { title: "Dress-up event", icon: "body-outline" },
        { title: "Outdors", icon: "partly-sunny-outline" },
        { title: "Hiking", icon: "footsteps-outline" }
    ];

    const styles = StyleSheet.create({
        main: {
            display: "flex",
            flex: 1,
            backgroundColor: "white"
        },

        container: {
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 10,
            marginHorizontal: 30
        },

        finish: {
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 50
        }
    });

    return (
        <View style={styles.main}>
            <ScrollView>
                <Text style={{ marginHorizontal: 30, marginVertical: 10 }}>Transportation</Text>
                <View style={styles.container}>
                    {transportation.map((item, index) =>
                        <TripButton key={index} icon={item.icon} text={item.title} />
                    )}
                </View>

                <Text style={{ marginHorizontal: 30, marginVertical: 10 }}>Activities</Text>
                <View style={styles.container}>
                    {activities.map((item, index) =>
                        <TripButton key={index} icon={item.icon} text={item.title} />
                    )}
                </View>
                <View style={styles.finish}>
                    <TextButton text="Done" link="/edit-trip" />
                </View>
            </ScrollView>
            
        </View>
    );
}