import { ScrollView, Text, View } from "react-native";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  const travel_data = require('./Travel_Info.json');
  
  return (
    <ScrollView contentContainerStyle={{ display: "flex", flex: 1, backgroundColor: "white" }}>
      <View style={{gap: 5, marginTop: 10}}>

        {/*Display travel data or appropriate message if no data exists*/}
        {travel_data.length === 0 ? (
          <Text style={{ fontSize: 32, fontWeight: "bold", margin: "auto"}}>No Travel information available</Text>
        ) : (
          travel_data.map((item: any, index: number) => (
            <Travel_Info key={index} location={item.location.toString()} date={item.date.toString()} progress={parseInt(item.progress)}/>
          ))
        )}

      </View>
    </ScrollView>
  );
}