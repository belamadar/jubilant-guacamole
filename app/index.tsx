import { ScrollView, Text, View } from "react-native";
import Button from "./Components/Button";
import Travel_Info from "./Components/Travel_Info";

export default function Index() {
  const travel_data = require('./Travel_Info.json');
  
  return (
    <ScrollView>
      <View style={{gap: "1%"}}>

        {/*Back button and page title*/}
        <View style={{ display: "flex", flexDirection: "row", padding: 20, gap: "25%" }}>
          <Button icon="arrow-back-sharp" text="" style={0} />
          <Text style={{ fontSize: 32 }}>My Trips</Text>
        </View>

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
