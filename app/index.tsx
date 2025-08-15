// import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
// import { Button } from "react-native-paper";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  const travel_data = require('./Travel_Info.json');

  return (
    <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white" }}>
      <View style={{ gap: 5, marginTop: 10 }}>

        {/*Display travel data or appropriate message if no data exists*/}
        {travel_data.length === 0 ? (
          <View>
            <Text style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>No Travel information available</Text>
            <Text style={{ fontSize: 16, textAlign: "center" }}>Select New Trip from below to add a Trip</Text>
          </View>
        ) : (
          travel_data.map((item: any, index: number) => (
            <Travel_Info key={index} location={item.location.toString()} date={item.date.toString()} progress={parseInt(item.progress)} />
          ))
        )}

        {/*For testing on expo go*/}
        {/* <Link href="/trip-items" asChild>
          <Button mode="contained" buttonColor="#994c00">Done</Button>
        </Link> */}

      </View>
    </ScrollView>
  );
}