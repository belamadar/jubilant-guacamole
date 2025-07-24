import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, RelativePathString } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    icon: string,
    text: string,
    style: number,
    link: string
}

export default function Button({ icon, text, style, link }: props) {
    const styles = StyleSheet.create({
        textIcon: {
            alignItems: "center",
            gap: 7
        },

        icon: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#994c00",
            padding: 8,
            borderRadius: 10
        },

        text: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#994c00",
            padding: 8,
            borderRadius: 10,
            maxHeight: 50,
            maxWidth: 75,
            minWidth: 75,
            minHeight: 50
        }


    });

    if (style === 0) {
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
    } else if (style === 1) {
        return (
            <Link href={link as RelativePathString} asChild>
                <TouchableOpacity>
                    <View style={styles.icon}>
                        <Ionicons name={icon as keyof typeof Ionicons.glyphMap} color={"white"} size={16} />
                    </View>
                </TouchableOpacity>
            </Link>

        );
    } else {
        return (
            <Link href={link as RelativePathString} asChild>
                <TouchableOpacity>
                    <View style={styles.text}>
                        <Text style={{ color: "white" }}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        );

    }
}