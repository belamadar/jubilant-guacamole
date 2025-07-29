import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    icon: string,
    text: string,
}

export default function TripButton({ icon, text }: props) {
    const [pressed, setPressed] = React.useState(false);

    const styles = StyleSheet.create({
        textIcon: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            backgroundColor: "#ffcccc",
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "transparent",
            padding: 20
        },

        textIconPressed: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            backgroundColor: "#ffcccc",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "blue",
            padding: 20,
        }
    });


    return (
        <TouchableOpacity onPress={() => setPressed(!pressed)}>
            {pressed ? (
                <View style={styles.textIconPressed}>
                    <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={32} />
                    <Text>{text}</Text>
                </View>
            ) : (
                <View style={styles.textIcon}>
                    <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={32} />
                    <Text>{text}</Text>
                </View>
            )}
        </TouchableOpacity>
    );



}