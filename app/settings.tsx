import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
});