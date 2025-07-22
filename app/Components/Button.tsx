import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, RelativePathString } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    icon: keyof typeof Ionicons.glyphMap,
    text: string,
    style: number,
    link: string
}

export default function Button({ icon, text, style, link }: props) {
    const styles = StyleSheet.create({
        nav: {
            alignItems: "center",
            gap: 7
        },

        edit: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#994c00",
            padding: 8,
            borderRadius: 10
        }
    });

    if (style === 0) {
        return (
            <Link href={link as RelativePathString} asChild>
                <TouchableOpacity>
                    <View style={styles.nav}>
                        <Ionicons name={icon} size={32} />
                        <Text>{text}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        );
    } else {
        return (
            <Link href={link as RelativePathString} asChild>
                <TouchableOpacity>
                    <View style={styles.edit}>
                        <Ionicons name={icon} color={"white"} size={16}/>
                    </View>
                </TouchableOpacity>
            </Link>

        );
    }
}