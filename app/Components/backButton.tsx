import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableHighlight, View } from "react-native";

function pressButton() {
    console.log("You pressed the button!");
}

export default function BackButton() {
    return (
        <TouchableHighlight onPress={pressButton}>
            <View>
                <Ionicons name='arrow-back-sharp' size={32}/>
            </View>
        </TouchableHighlight>
    );
}