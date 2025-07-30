import { RelativePathString, useRouter } from 'expo-router';
import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";

type props = {
    text: string,
    link: string
}

export default function TextButton({ text, link }: props) {
    const router = useRouter();

    const handlePress = () => {
        Keyboard.dismiss();
        setTimeout(() => {
            router.push(link as RelativePathString);
        }, 100);
    };

    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#994c00",
            borderRadius: 10,
            padding: 20
        }
    });

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={{ color: "white" }}>{text}</Text>
        </TouchableOpacity>
    );
}