import { StyleSheet, Text, View } from "react-native";
import Shapes from './shapes';

type boxProps = {
    city: string,
    date: string
}

export default function Box({city, date}: boxProps) {
    const styles = StyleSheet.create({
        outerContainer: {
            display: "flex",
            flexDirection: "row",
            margin: 50,
            padding: 5,
            borderRadius: 20,
            backgroundColor: "#eaeaea",
            gap: 25
        },

        innerContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 40,
            borderRadius: 20,
            width: "90%",
            backgroundColor: "#f7f7f7"
        },

        profile: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 75,
            width: 75,
            borderRadius: "50%",
            backgroundColor: "#ffb766",
        },

        location: {
            display: "flex",
            gap: 12
        },
    });

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.profile}>
                    {/*Error fixed: Must wrap text in Text element before wrapping in a View*/}
                    <Text style={{ fontFamily: 'Arial', fontSize: 24 }}>A</Text>
                </View>
                <View style={styles.location}>
                    <Text style={{ fontWeight: "bold", fontFamily: 'Arial', fontSize: 24 }}>{city}</Text>
                    <Text style={{ fontFamily: 'Arial', fontSize: 24 }}>{date}</Text>
                </View>
            </View>
            <Shapes />
        </View>
    );
}