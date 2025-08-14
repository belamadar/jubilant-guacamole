import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu, PaperProvider } from "react-native-paper";
import CheckBox from "./Components/CheckBox";

export default function TripItems() {

    const styles = StyleSheet.create({
        main_container: {
            display: "flex",
            flex: 1,
            backgroundColor: "white"
        },

        container: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#fff5ee",
        },

        menu: {
            left: 0,
            right: 0,
            transform: [{ translateY: -15 }]    // Pins menu to navbar
        },

        item: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },

        button: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
            padding: 10,
        },

        button_Pressed: {
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: "#994c00",
            padding: 10,
        }

    });

    const [essentials, setEssentials] = useState(true);
    const openEssentials = () => setEssentials(true);
    const closeEssentials = () => setEssentials(false);

    const [health, setHealth] = useState(false);
    const openHealth = () => setHealth(true);
    const closeHealth = () => setHealth(false);

    const [audio, setAudio] = useState(false);
    const openAudio = () => setAudio(true);
    const closeAudio = () => setAudio(false);

    const [tab, setTab] = useState(false);
    const openTab = () => setTab(true);
    const closeTab = () => setTab(false);

    return (

        <ScrollView contentContainerStyle={styles.main_container}>
            <PaperProvider>
                <View style={styles.container}>

                    <Menu
                        visible={essentials}
                        onDismiss={closeEssentials}
                        anchor={
                            <TouchableOpacity onPress={openEssentials}>
                                <View style={essentials ? styles.button_Pressed : styles.button}>
                                    <MaterialCommunityIcons name="checkbox-marked-outline" size={15} />
                                    <Text style={{ textAlign: "center" }}>Essentials</Text>
                                </View>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee" }}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 1" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 2" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 3" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 4" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 5" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 6" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={health}
                        onDismiss={closeHealth}
                        anchor={
                            <TouchableOpacity onPress={openHealth}>
                                <View style={health ? styles.button_Pressed : styles.button}>
                                    <MaterialCommunityIcons name="heart-outline" size={15} />
                                    <Text style={{ textAlign: "center" }}>Health</Text>
                                </View>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee" }}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Health item 1" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 2" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 3" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 4" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 5" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 6" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={audio}
                        onDismiss={closeAudio}
                        anchor={
                            <TouchableOpacity onPress={openAudio}>
                                <View style={audio ? styles.button_Pressed : styles.button}>
                                    <MaterialCommunityIcons name="music-note-outline" size={15} />
                                    <Text style={{ textAlign: "center" }}>Audio</Text>
                                </View>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee" }}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 1" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 2" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 3" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 4" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 5" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 6" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={tab}
                        onDismiss={closeTab}
                        style={styles.menu}
                        anchor={
                            <TouchableOpacity onPress={openTab}>
                                <View style={tab ? styles.button_Pressed : styles.button}>
                                    <MaterialCommunityIcons name="plus" size={15} />
                                    <Text style={{ textAlign: "center" }}>Tab</Text>
                                </View>
                            </TouchableOpacity>}
                        contentStyle={{ backgroundColor: "#fff5ee" }}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 1" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 2" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 3" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 4" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 5" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 6" titleStyle={{ color: 'black' }} />
                            <CheckBox />
                        </View>
                    </Menu>

                </View>
            </PaperProvider>

        </ScrollView>
    );
}

