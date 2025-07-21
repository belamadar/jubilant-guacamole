import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function NavBar() {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            backgroundColor: "#fff5ee",
        }
    });

    const attributes = [
        {key:'0', icon: "list", text: "My Trips"},
        {key:'1', icon: "add-outline", text: "New Trip"},
        {key:'2', icon: "calendar-outline", text: "Calender"},
        {key:'3', icon: "settings", text: "Settings"},
    ]

    return (
        <View style={styles.container}>
            {attributes.map((attribute) => (
                <Button 
                    key={attribute.key} 
                    icon={attribute.icon as keyof typeof Ionicons.glyphMap} 
                    text={attribute.text}
                    style={0}
                />
            ))}
        </View>
    );
}