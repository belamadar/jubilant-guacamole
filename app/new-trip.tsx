import { useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';

export default function NewTrip() {

    const [startDate, setStartDate] = useState(new Date());
    const [startOpen, setStartOpen] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    const [endOpen, setEndOpen] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>New Trip</Text>
            <TextInput placeholder="Trip Name" style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10, width: "80%", marginTop: 20 }} />

            <Button title="Select Start Date" onPress={() => setStartOpen(true)} />
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

            <Button title="Select End Date" onPress={() => setEndOpen(true)} />
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
        </ScrollView>
    );
}