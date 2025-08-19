import { Text, View } from "react-native";

export default function Calendar() {
    return (
        <View style={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>Calendar</Text>
        </View>
    );
}