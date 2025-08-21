import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import CheckBox from './Components/CheckBox';

export default function TripItems() {
    const [essentials, setEssentials] = useState(true);
    const [health, setHealth] = useState(false);
    const [audio, setAudio] = useState(false);
    const [tab, setTab] = useState(false);

    const styles = StyleSheet.create({
        main_container: {
            display: "flex",
            backgroundColor: "white"
        },

        nav_container: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#fff5ee",
            padding: 10,
            marginBottom: 1
        },

        menu_container: {
            backgroundColor: "#fff5ee",
            borderBottomWidth: 1,
            borderBottomColor: "#eeeee4",
            elevation: 5 
        },

        item: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10
        },

        button: {
            display: "flex",
            gap: 5,
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
        },

        button_Pressed: {
            display: "flex",
            flexDirection: "row",
            gap: 5,
            padding: 5,
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: "#994c00",
        }


    });

    const showEssentials = () => {
        if (!essentials) {
            setEssentials(true);
            setHealth(false);
            setAudio(false);
            setTab(false);
        }
    }

    const showHealth = () => {
        if (!health) {
            setHealth(true);
            setEssentials(false);
            setAudio(false);
            setTab(false);
        }
    }

    const showAudio = () => {
        if (!audio) {
            setAudio(true);
            setHealth(false);
            setEssentials(false);
            setTab(false);
        }

    }

    const showTab = () => {
        if (!tab) {
            setTab(true);
            setAudio(false);
            setHealth(false);
            setEssentials(false);
        }
    }

    const essentialItems = ["Essential item 1", "Essential item 2", "Essential item 3",
        "Essential item 4", "Essential item 5", "Essential item 6"];

    const healthItems = ["Health item 1", "Health item 2", "Health item 3",
        "Health item 4", "Health item 5", "Health item 6"];

    const audioItems = ["Audio item 1", "Audio item 2", "Audio item 3",
        "Audio item 4", "Audio item 5", "Audio item 6"];

    const tabItems = ["Tab item 1", "Tab item 2", "Tab item 3",
        "Tab item 4", "Tab item 5", "Tab item 6"];

    return (
        <ScrollView contentContainerStyle={styles.main_container}>
            <View style={styles.nav_container}>

                <View style={essentials ? styles.button_Pressed : styles.button}>
                    <TouchableOpacity onPress={showEssentials} style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                        <MaterialCommunityIcons name="checkbox-marked-outline" size={15} />
                        <Text style={{ textAlign: "center" }}>Essentials</Text>
                    </TouchableOpacity>
                </View>

                <View style={health ? styles.button_Pressed : styles.button}>
                    <TouchableOpacity onPress={showHealth} style={{ flexDirection: "row", gap: 5 }}>
                        <MaterialCommunityIcons name="heart-outline" size={15} />
                        <Text style={{ textAlign: "center" }}>Health</Text>
                    </TouchableOpacity>
                </View>

                <View style={audio ? styles.button_Pressed : styles.button}>
                    <TouchableOpacity onPress={showAudio} style={{ flexDirection: "row", gap: 5 }}>
                        <MaterialCommunityIcons name="music-note-outline" size={15} />
                        <Text style={{ textAlign: "center" }}>Audio</Text>
                    </TouchableOpacity>
                </View>

                <View style={tab ? styles.button_Pressed : styles.button}>
                    <TouchableOpacity onPress={showTab} style={{ flexDirection: "row", gap: 5 }}>
                        <MaterialCommunityIcons name="plus" size={15} />
                        <Text style={{ textAlign: "center" }}>Tab</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {essentials && (
                <View style={styles.menu_container}>
                    {essentialItems.map((item: string, index: number) => (
                        <View key={index} style={styles.item}>
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                            <CheckBox />
                        </View>
                    ))}
                </View>
            )}

            {health && (
                <View style={styles.menu_container}>
                    {healthItems.map((item: string, index: number) => (
                        <View key={index} style={styles.item}>
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                            <CheckBox />
                        </View>
                    ))}
                </View>
            )}

            {audio && (
                <View style={styles.menu_container}>
                    {audioItems.map((item: string, index: number) => (
                        <View key={index} style={styles.item}>
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                            <CheckBox />
                        </View>
                    ))}
                </View>
            )}

            {tab && (
                <View style={styles.menu_container}>
                    {tabItems.map((item: string, index: number) => (
                        <View key={index} style={styles.item}>
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                            <CheckBox />
                        </View>
                    ))}
                </View>
            )}

            <Link href="/" asChild>
                <Button mode="contained" buttonColor="#994c00" textColor="white">Finish</Button>
            </Link>
            
        </ScrollView >
    );

}

