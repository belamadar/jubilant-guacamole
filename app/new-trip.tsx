import { Link } from 'expo-router';
import { useState } from "react";
import { ScrollView, Text, TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import { Button } from "react-native-paper";

export default function NewTrip() {
    const [tripName, setTripName] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [startOpen, setStartOpen] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [endOpen, setEndOpen] = useState(false);

    const confirm = tripName.trim() === "" || startDate >= endDate;
    let next :boolean = false;

    const addData = () => {
        sessionStorage.setItem('tripName', tripName);
        sessionStorage.setItem('startDate', startDate.toDateString());
        sessionStorage.setItem('endDate', endDate.toDateString());
        next = true;
    }

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center", gap: 10 }}>
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

            <Button mode='contained' buttonColor="#994c00" disabled={confirm} onPress={addData}>Confirm</Button>
            {/* <Button mode='contained' buttonColor="#994c00" disabled={false} onPress={addData}>Confirm</Button> */}

            <Link href="/trip-type" asChild>
                {/* <Button mode="contained" buttonColor="#994c00" disabled={disabled}>Next</Button> */}
                <Button mode="contained" buttonColor="#994c00" disabled={false}>Next</Button>
            </Link>

        </ScrollView>
    );
}