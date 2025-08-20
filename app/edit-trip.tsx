import { repo } from "@/assets/db/repo";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function EditTrip() {
    let transports: any[] = [];
    let activities: any[] = [];
    const [err, setErr] = useState("");

    try {
        transports = repo.getAllTransports();
        activities = repo.getAllActivities();
    } catch (error) {
        setErr(error instanceof Error ? error.message : String(error));
    }

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>Edit Trip</Text>
            <Text style={{ fontWeight: "bold", fontSize: 32 }}>Transportation</Text>
            {transports.length > 0 && (
                transports.map((item, index) => (
                    <View key={index}>
                        <Text style={{ fontWeight: "bold" }}>{item.destination}</Text>
                        <Text>{item.transport_id}</Text>
                    </View>
                    
                ))
            )}

            <Text style={{ fontWeight: "bold", fontSize: 32 }}>Activities</Text>
            {activities.length > 0 && (
                activities.map((item, index) => (
                    <View key={index}>
                        <Text style={{ fontWeight: "bold" }}>{item.destination}</Text>
                        <Text>{item.activity_id}</Text>
                    </View>
                ))
            )}

            {err && (
                <Text style={{ textAlign: "center" }}>An error occured</Text>
            )}
        </ScrollView>
    );
}