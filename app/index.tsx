import { ScrollView, StyleSheet, Text, View } from "react-native";
import Box from './box';
import Icons from './navIcons';

function cities() {
  const data = [
    {
      id: '0',
      city: "Barcelona",
      date: "17.08.2025 - 22.08.2025"
    },
    {
      id: '1',
      city: "Madrid",
      date: "23.08.2025 - 28.08.2025"
    },
    {
      id: '2',
      city: "Seville",
      date: "30.08.2025 - 04.09.2025"
    },
    {
      id: '3',
      city: "Malaga",
      date: "05.09.2025 - 10.09.2025"
    }

  ]

  return data.map((location) => (<Box key={location.id} city={location.city} date={location.date} />));
}

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 50,
      backgroundColor: "#fff5d7"
    },

    text: {
      fontFamily: 'Arial',
      fontSize: 32
    }
  });

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>My Trips</Text>
          <Icons />
        </View>
        {cities()}
      </View>
    </ScrollView>
  );
}