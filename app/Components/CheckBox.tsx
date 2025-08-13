import { useState } from "react";
import { Checkbox } from "react-native-paper";

/* Wrapper component for React native paper checkbox. 
Allows implementation of multiple checkboxes 
without having to create a use state for each one 
in main component */
export default function CheckBox() {
    const [checked, setChecked] = useState(false);

    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#994c00"
            onPress={() => {
                setChecked(!checked);
            }}
        />
    );
}