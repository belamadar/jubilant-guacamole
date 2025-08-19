import { repo } from "@/assets/db/repo";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

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
            {transports.length > 0 && (
                transports.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))
            )}

            {activities.length > 0 && (
                activities.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))
            )}

            {err && (
                <Text style={{ textAlign: "center" }}>An error occured</Text>
            )}
        </ScrollView>
    );
}