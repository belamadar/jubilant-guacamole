import Ionicons from '@expo/vector-icons/Ionicons';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import { router } from 'expo-router';
import { StyleSheet, View } from "react-native";
import NavButton from "./NavButton";
// import { Button } from 'react-native-paper';


export default function NavBar() {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 50,
            margin: 0,
            backgroundColor: "#fff5ee",
        }
    });

    const attributes = [
        { icon: "list", text: "My Trips", link: "/" },
        { icon: "add-outline", text: "New Trip", link: "/new-trip" },
        { icon: "calendar-outline", text: "Calender", link: "/calendar" },
        { icon: "settings", text: "Settings", link: "/settings" },
    ]

    // const styles = StyleSheet.create({
    //     container: {
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         gap: 40,
    //         paddingHorizontal: 10,
    //         paddingTop: 5,
    //         paddingBottom: 50,
    //         backgroundColor: "#fff5ee",
    //     },

    //     button: {
    //         flexDirection: "column",
    //         maxWidth: 60,
    //     }
    // });

    return (
        <View style={styles.container}>
            {attributes.map((attribute, index) => (
                <NavButton
                    key={index}
                    icon={attribute.icon as keyof typeof Ionicons.glyphMap}
                    text={attribute.text}
                    link={attribute.link}
                />
            ))}
        </View>
        // <View style={styles.container}>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => router.replace('/')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='menu' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>My Trips</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => console.log('Pressed')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='plus' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>New Trip</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() <View style={styles.container}>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => router.replace('/')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='menu' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>My Trips</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => console.log('Pressed')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='plus' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>New Trip</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => router.replace('/(tabs)/calendar')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='calendar-month' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>Calendar</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => router.replace('/(tabs)/settings')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='cog' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>Settings</Text>
        //         </View>
        //     </Button>

        // </View>=> router.replace('/(tabs)/calendar')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='calendar-month' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>Calendar</Text>
        //         </View>
        //     </Button>

        //     <Button
        //         mode="contained"
        //         buttonColor="none"
        //         loading={false}
        //         contentStyle={styles.button}
        //         onPress={() => router.replace('/(tabs)/settings')}
        //     >
        //         <View style={{ alignItems: 'center' }}>
        //             <Icon name='cog' size={24} color="black" />
        //             <Text style={{ color: 'black' }}>Settings</Text>
        //         </View>
        //     </Button>

        // </View>
    );
}