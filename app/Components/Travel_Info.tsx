import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

type props = {
    location: string,
    date: string
}

export default function Travel_Info({ location, date }: props) {
    const styles = StyleSheet.create({
        outer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "5%",
            marginRight: "5%",
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "#dcdcdc",
            backgroundColor: "#fff5ee",
        },

        innerLeft: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            // maxWidth: "50%",
            padding: "2%",
            gap: "15%"
        },

        innerRight: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            // maxWidth: "50%",
            padding: "2%"
        }
    });

    return (

        <View style={styles.outer}>
            <View style={styles.innerLeft}>
                <Text style={{ fontSize: 24 }}>{location}</Text>
                <Text style={{ fontSize: 24 }}>{date}</Text>
            </View>
            <View style={styles.innerRight}>
                {/* <AnimatedCircularProgress
                    size={120}
                    width={10}
                    fill={50}
                    tintColor="#330000"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#ffcc99"
                    rotation={0}
                /> */}
                <Button icon="pencil" text="" style={1}/>
            </View>
        </View>
    );
}