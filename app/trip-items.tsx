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
            transform: [{ translateY: -22 }]    // Pins menu to navbar
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
                        // anchor={<Button contentStyle={essentials ? styles.button_Pressed : {} }
                        //                 style={styles.button}
                        //                 textColor="black" 
                        //                 icon="checkbox-marked-outline" 
                        //                 onPress={openEssentials}>Essentials</Button>}
                        anchor={
                            <TouchableOpacity style={essentials ? styles.button_Pressed : styles.button} onPress={openEssentials}>
                                <MaterialCommunityIcons name="checkbox-marked-outline" size={15}/>
                                <Text style={{textAlign: "center"}}>Essentials</Text>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee"}}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 1" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 2" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 3" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 4" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 5" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Essential item 6" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={health}
                        onDismiss={closeHealth}
                        // anchor={<Button contentStyle={health ? styles.button_Pressed : {} }
                        //                 style={styles.button}
                        //                 textColor="black" 
                        //                 icon="heart-outline" 
                        //                 onPress={openHealth}>Health</Button>}
                        anchor={
                            <TouchableOpacity style={health ? styles.button_Pressed : styles.button} onPress={openHealth}>
                                <MaterialCommunityIcons name="heart-outline" size={15}/>
                                <Text style={{textAlign: "center"}}>Health</Text>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee"}}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Health item 1" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 2" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 3" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 4" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 5" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Health item 6" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={audio}
                        onDismiss={closeAudio}
                        // anchor={<Button contentStyle={audio ? styles.button_Pressed : {} } 
                        //                 style={styles.button}
                        //                 textColor="black" 
                        //                 icon="music-note-outline" 
                        //                 onPress={openAudio}>Audio</Button>}
                        anchor={
                            <TouchableOpacity style={audio ? styles.button_Pressed : styles.button} onPress={openAudio}>
                                <MaterialCommunityIcons name="music-note-outline" size={15}/>
                                <Text style={{textAlign: "center"}}>Audio</Text>
                            </TouchableOpacity>}
                        style={styles.menu}
                        contentStyle={{ backgroundColor: "#fff5ee"}}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 1" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 2" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 3" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 4" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 5" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Audio item 6" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>
                    </Menu>

                    <Menu
                        visible={tab}
                        onDismiss={closeTab}
                        // anchor={<Button contentStyle={tab ? styles.button_Pressed : {} }
                        //                 style={styles.button} 
                        //                 textColor="black" 
                        //                 icon="plus" 
                        //                 onPress={openTab}>Tab</Button>}
                        style={styles.menu}
                        anchor={
                            <TouchableOpacity style={tab ? styles.button_Pressed : styles.button} onPress={openTab}>
                                <MaterialCommunityIcons name="plus" size={15}/>
                                <Text style={{textAlign: "center"}}>Tab</Text>
                            </TouchableOpacity>}
                        contentStyle={{ backgroundColor: "#fff5ee"}}
                    >

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 1" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 2" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 3" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 4" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 5" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>

                        <View style={styles.item}>
                            <Menu.Item title="Tab item 6" titleStyle={{ color: 'black' }}/>
                            <CheckBox />
                        </View>
                    </Menu>

                </View>
            </PaperProvider>

        </ScrollView>
    );
}

