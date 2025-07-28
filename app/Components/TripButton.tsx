import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, RelativePathString } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    icon: string,
    text: string,
    link: string
}

export default function TripButton({ icon, text, link }: props) {
    const styles = StyleSheet.create({
        textIcon: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            backgroundColor: "#fff5ee",
            borderRadius: 20,
            padding: 20
        }
    });

    return (
        <Link href={link as RelativePathString} asChild>
            <TouchableOpacity>
                <View style={styles.textIcon}>
                    <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={32} />
                    <Text>{text}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}