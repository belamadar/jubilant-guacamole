import { Link, RelativePathString } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
    text: string,
    link: string
}

export default function Button({ text, link }: props) {
    const styles = StyleSheet.create({
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