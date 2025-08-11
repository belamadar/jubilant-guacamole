import { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
// If you have the @ alias, use: import { repo } from '@/assets/db/repo'
import { repo } from '@/assets/db/repo';
import { v4 as uuid } from 'uuid';

export default function DbTest() {
  const [tripId] = useState(uuid());
  const [items, setItems] = useState<any[]>([]);
  const [msg, setMsg] = useState<string>('Ready');

  const createTrip = () => {
    repo.createTrip({
      id: tripId,
      destination: 'Berlin',
      start_date: '2025-08-20',
      end_date: '2025-08-25',
      notes: ''
    });
    setMsg('Trip created');
  };

  const pickSelections = () => {
    // These IDs must exist in your shipped-data.json
    repo.setTripActivities(tripId, ['act_hiking']);
    repo.setTripTransports(tripId, ['trn_plane']);
    setMsg('Selected: Hiking + Plane');
  };

  const generateList = () => {
    repo.generatePackingList({ tripId, days: 5 });
    const data = repo.getTripItems(tripId, { onlySelected: true });
    setItems(data);
    setMsg(`Generated ${data.length} items for 5 days`);
  };

  const toggleFirst = () => {
    if (!items.length) return;
    repo.toggleItemChecked(tripId, items[0].item_id);
    setItems(repo.getTripItems(tripId, { onlySelected: true }));
    setMsg('Toggled first item');
  };

  const overrideFirst = () => {
    if (!items.length) return;
    repo.overrideQuantity(tripId, items[0].item_id, 42);
    setItems(repo.getTripItems(tripId, { onlySelected: true }));
    setMsg('Overrode first item to 42');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontWeight: '600' }}>DB Test</Text>
      <Text>{msg}</Text>

      <Button title="1) Create Trip" onPress={createTrip} />
      <Button title="2) Select Hiking + Plane" onPress={pickSelections} />
      <Button title="3) Generate List (5 days)" onPress={generateList} />
      <Button title="Toggle First Item" onPress={toggleFirst} />
      <Button title="Override First Item → 42" onPress={overrideFirst} />

      {items.map((it) => (
        <View key={it.item_id} style={{ padding: 8, borderWidth: 1, borderRadius: 8 }}>
          <Text>{it.name} — {it.quantity} {it.unit ?? ''}</Text>
          <Text>{it.checked ? '✓ packed' : '□ not packed'} {it.overridden ? '(overridden)' : ''}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
