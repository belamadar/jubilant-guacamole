import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function NavBar() {
    return (
        <View style={styles.container}>

            <View>
                <Link href="/" push asChild>
                    <IconButton icon="format-list-bulleted" iconColor="black" />
                </Link>
                <Text>My Trips</Text>
            </View>

            <View>
                <Link href="/new-trip" push asChild>
                    <IconButton icon="plus" iconColor="black" />
                </Link>
                <Text>New Trip</Text>
            </View>

            <View>
                <Link href="/calendar" push asChild>
                    <IconButton icon="calendar" iconColor="black" />
                </Link>
                <Text>Calendar</Text>
            </View>

            <View>
                <Link href="/settings" push asChild>
                    <IconButton icon="cog" iconColor="black" />
                </Link>
                <Text>Settings</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 5,
        backgroundColor: "#fff5ee",
    }
});