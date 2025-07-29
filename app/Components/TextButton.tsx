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
            borderRadius: 10,
            padding: 20
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