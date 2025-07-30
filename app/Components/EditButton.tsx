import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, RelativePathString } from 'expo-router';
import { StyleSheet, TouchableOpacity } from "react-native";

type props = {
    icon: string,
    link: string
}

export default function EditButton({ icon, link }: props) {

    const styles = StyleSheet.create({
        icon: {
            display: "flex",
            alignItems: "center",
            backgroundColor: "#994c00",
            padding: 8,
            borderRadius: 10
        }
    });

    return (
        <Link href={link as RelativePathString} asChild>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name={icon as keyof typeof Ionicons.glyphMap} color={"white"} size={16} />
            </TouchableOpacity>
        </Link>
    );
}