// import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { StyleSheet, Text, View } from "react-native";

type props = {
    location: string,
    date: string
}

export default function Travel_Info({location, date}: props) {
    const styles = StyleSheet.create({
        inner: {
            display: "flex", 
            flexDirection: "column",
            justifyContent: "space-between", 
            alignItems: "center",
        }
    });

    return (
        // <AnimatedCircularProgress
        //     size={120}
        //     width={15}
        //     fill={20}
        //     tintColor="#330000"
        //     onAnimationComplete={() => console.log('onAnimationComplete')}
        //     backgroundColor="#ffcc99"
        //     rotation={0}
        // />
        <View style={{"backgroundColor": "#ffcc99"}}>
            <View style={styles.inner}>
                <Text>{location}</Text>
                <Text>{date}</Text>
            </View>
        </View>
    );
}