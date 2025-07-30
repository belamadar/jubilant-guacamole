import React from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import TextButton from "./Components/TextButton";
// import { useRouter } from "expo-router";

export default function NewTrip() {
    const [name, setName] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    // const router = useRouter();

    const styles = StyleSheet.create({

        constainer: {
            display: "flex",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: 50,
            gap: 20,
            backgroundColor: "white"
        },

        input: {
            fontSize: 20,
            opacity: 0.7,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            minWidth: 300,
            maxWidth: 300
        }
    });

    return (
        <ScrollView contentContainerStyle={styles.constainer} keyboardShouldPersistTaps="handled">
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder={'Trip Name'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setStartDate}
                value={startDate}
                placeholder={'Start Date: MM/DD/YY'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setEndDate}
                value={endDate}
                placeholder={'End Date: MM/DD/YY'}
            />
            <TextButton text="Next" link="/trip-type" />
        </ScrollView>
    );
}