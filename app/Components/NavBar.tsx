import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function NavBar() {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 50,
            backgroundColor: "#fff5ee",
        }
    });

    const attributes = [
        {icon: "list", text: "My Trips"},
        {icon: "add-outline", text: "New Trip"},
        {icon: "calendar-outline", text: "Calender"},
        {icon: "settings", text: "Settings"},
    ]

    return (
        <View style={styles.container}>
            {attributes.map((attribute, index) => (
                <Button 
                    key={index}
                    icon={attribute.icon as keyof typeof Ionicons.glyphMap} 
                    text={attribute.text}
                    style={0}
                />
            ))}
        </View>
    );
}