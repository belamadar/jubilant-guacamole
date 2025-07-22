import { ScrollView, Text } from "react-native";

export default function EditTrip() {
    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>Edit Trip</Text>
        </ScrollView>
    );
}