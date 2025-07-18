import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableHighlight, View } from "react-native";

function pressButton() {
    console.log("You pressed the button!");
}

type props = {
    icon: keyof typeof Ionicons.glyphMap,
    text: string
}

export default function Button({icon, text}: props) {
    return (
        <TouchableHighlight onPress={pressButton}>
            <View style={{"alignItems": "center", "gap": 7}}>
                <Ionicons name={icon} size={32}/>
                <Text>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}