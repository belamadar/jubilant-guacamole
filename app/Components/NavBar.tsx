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
        {icon: "list", text: "My Trips", link: "/my-trips"},
        {icon: "add-outline", text: "New Trip", link: "/new-trip"},
        {icon: "calendar-outline", text: "Calender", link: "/calendar"},
        {icon: "settings", text: "Settings", link: "/settings"},
    ]

    return (
        <View style={styles.container}>
            {attributes.map((attribute, index) => (
                <Button 
                    key={index}
                    icon={attribute.icon as keyof typeof Ionicons.glyphMap} 
                    text={attribute.text}
                    style={0}
                    link={attribute.link}
                />
            ))}
        </View>
    );
}