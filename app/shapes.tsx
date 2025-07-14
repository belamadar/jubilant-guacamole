import { StyleSheet, View } from "react-native";

export default function Shapes() {
    const styles = StyleSheet.create({
        outerContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8
        },

        innerContainer: {
            display: "flex",
            flexDirection: "row",
            gap: 8
        },

        circle: {
            height: 60,
            width: 60,
            borderRadius: "50%",
            backgroundColor: "lightgrey",
        },

        square: {
            height: 60,
            width: 60,
            borderRadius: 10,
            backgroundColor: "lightgrey"
        }
    });

    return (
        <View style={styles.outerContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="50" viewBox="0 0 263 209" fill="none">
                <path d="M108.318 13.2253C119.424 -3.17117 143.576 -3.17117 154.682 13.2253L257.35 164.797C269.944 183.39 256.624 208.5 234.167 208.5H28.8328C6.3759 208.5 -6.94364 183.39 5.65037 164.797L108.318 13.2253Z" fill="lightgrey" />
            </svg>
            <View style={styles.innerContainer}>
                <View style={styles.circle}></View>
                <View style={styles.square}></View>
            </View>
        </View>
    );
}