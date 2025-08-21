import { repo } from "@/assets/db/repo";
import { Link } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from 'react-native-date-picker';
import { Button } from "react-native-paper";

export default function NewTrip() {
    const [tripName, setTripName] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [startOpen, setStartOpen] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [endOpen, setEndOpen] = useState(false);

    const confirm = tripName.trim() === "" || startDate >= endDate;
    const [textContent, setTextContent] = useState('Confirm');
    const [next, setNext] = useState(true);


    const addData = () => {
        if (textContent === 'Confirm') {
            repo.createTrip({ destination: tripName, start_date: startDate.toDateString(), end_date: endDate.toDateString() });
            setTextContent('Reset');
        } else {
            repo.deleteTrip(tripName);
            setTextContent('Confirm');
            setTripName("");
            setStartDate(new Date());
            setEndDate(new Date());
        }

        setNext(!next);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>New Trip</Text>

            <TextInput
                placeholder="Trip Name"
                value={tripName}
                onChangeText={setTripName}
                style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, width: "80%", marginTop: 20 }}
            />

            <Button mode="contained" buttonColor="#994c00" onPress={() => setStartOpen(!startOpen)}>Select Start Date</Button>
            <DatePicker
                modal
                open={startOpen}
                date={startDate}
                onConfirm={(date) => {
                    setStartOpen(false);
                    setStartDate(date);
                }}
                onCancel={() => {
                    setStartOpen(false);
                }}
            />

            <Button mode="contained" buttonColor="#994c00" onPress={() => setEndOpen(!endOpen)}>Select End Date</Button>
            <DatePicker
                modal
                open={endOpen}
                date={endDate}
                onConfirm={(date) => {
                    setEndOpen(false);
                    setEndDate(date);
                }}
                onCancel={() => {
                    setEndOpen(false);
                }}
            />

            <Button mode='contained' buttonColor="#994c00" disabled={confirm} onPress={addData}>{textContent}</Button>
            {/* <Button mode='contained' buttonColor="#994c00" disabled={false} onPress={addData}>{textContent}</Button> */}

            <Link href={{ pathname: "/trip-type", params: { destination: tripName } }} push asChild>
                <Button mode="contained" buttonColor="#994c00" disabled={next}>Next</Button>
                {/* <Button mode="contained" buttonColor="#994c00" disabled={false}>Next</Button> */}
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    }
});