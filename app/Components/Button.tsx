import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function pressButton() {
    console.log("You pressed the button!");
}

type props = {
    icon: keyof typeof Ionicons.glyphMap,
    text: string,
    style: number
}

export default function Button({ icon, text, style }: props) {
    const styles = StyleSheet.create({
        nav: {
            alignItems: "center",
            gap: 7
        },

        edit: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#994c00",
            padding: 16,
            borderRadius: 10
        }
    });

    if (style === 0) {
        return (
            <TouchableOpacity onPress={pressButton}>
                <View style={styles.nav}>
                    <Ionicons name={icon} size={32}/>
                    <Text>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={pressButton}>
                <View style={styles.edit}>
                    <Ionicons name={icon} color={"white"} />
                </View>
            </TouchableOpacity>
        );
    }
}