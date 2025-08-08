import { ScrollView, StyleSheet, View } from "react-native";
import { SolidIcons } from 'react-native-fontawesome';
import { Button } from "react-native-paper";

export default function TripType() {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }
    });

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <Button mode="contained" buttonColor="#ed9380" icon={SolidIcons.bus}>transport</Button>
            </View>
        </ScrollView>
    );
}