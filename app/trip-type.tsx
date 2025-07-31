import { ScrollView, Text } from "react-native";

export default function TripType() {
    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>Trip Type</Text>
        </ScrollView>
    );
}