import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function TripType() {
    const styles = StyleSheet.create({
        main_Container: {
            display: "flex", 
            flex: 1, 
            backgroundColor: "white", 
            paddingHorizontal: 40, 
            gap: 10
        },

        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 5,
        }
    });

    return (
        <View style={styles.main_Container}>
            <Text style={{ marginTop: 10 }}>Transportation</Text>
            <View style={styles.container}>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="bus" contentStyle={{
                    padding: 10
                }}>Bus</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="airplane" contentStyle={{
                    padding: 10
                }}>Airplane</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="ferry" contentStyle={{
                    padding: 10
                }}>Ferry</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="car" contentStyle={{
                    padding: 10
                }}>Car</Button>

            </View>
            
            <Text style={{ marginTop: 10 }}>Activities</Text>
            <View style={styles.container}>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="campfire" contentStyle={{
                    padding: 10
                }}>Camping</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="surfing" contentStyle={{
                    padding: 10
                }}>Surfing</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="ferry" contentStyle={{
                    padding: 10
                }}>Sailing</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="beach" contentStyle={{
                    padding: 10
                }}>Beach</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="tie" contentStyle={{
                    padding: 10
                }}>Dress-up event</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="sunglasses" contentStyle={{
                    padding: 10
                }}>Outdoors</Button>

                <Button mode="contained" textColor="black" buttonColor="#ffd1c5" icon="hiking" contentStyle={{
                    padding: 10
                }}>Hiking</Button>

            </View>
            
            <Link href="/trip-items" asChild>
                <Button mode="contained" buttonColor="#994c00">Done</Button>
            </Link>
            
        </View>
    );
}