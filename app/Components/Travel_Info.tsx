import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { IconButton } from "react-native-paper";

type props = {
    location: string,
    date: string,
    progress: number
}

export default function Travel_Info({ location, date, progress }: props) {
    const styles = StyleSheet.create({
        outer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 5,
            marginRight: 5,
            padding: 5,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "#dcdcdc",
            backgroundColor: "#fff5ee",
        },

        innerLeft: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "flex-start",
            padding: 2,
            gap: 5
        },

        innerRight: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10
        }
    });

    return (

        <View style={styles.outer}>
            <View style={styles.innerLeft}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{location}</Text>
                <Text style={{ fontSize: 16 }}>{date}</Text>
            </View>
            <View style={styles.innerRight}>
                <CircularProgress
                    value={progress}
                    showProgressValue={false}
                    radius={15}
                    duration={0}
                    activeStrokeColor={"#994c00"}
                    inActiveStrokeColor={"#ffcc99"}
                    activeStrokeWidth={7}
                    inActiveStrokeWidth={7}
                    maxValue={100}
                />
                
                <Link href="/edit-trip" asChild>
                    <IconButton icon="pencil" iconColor="white" containerColor="#994c00"/>
                </Link>
            </View>
        </View>
    );
}