import React from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Button from "./Components/Button";

export default function NewTrip() {
    const [name, setName] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const styles = StyleSheet.create({
        constainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            gap: 20,
        },

        input: {
            display: "flex",
            flex: 1,
            fontSize: 20,
            opacity: 0.7,
            padding: 20,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            minWidth: 300
        }
    });

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white" }}>
            <View style={styles.constainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Trip Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setStartDate}
                    value={startDate}
                    placeholder="Start Date: MM/DD/YY"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEndDate}
                    value={endDate}
                    placeholder="End Date: MM/DD/YY"
                />
                <Button text="Next" icon="" style={2} link=""/>
            </View>
        </ScrollView>
    );
}