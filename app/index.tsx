import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { IGoal } from '../src/models/Goal';
import { testGoals } from '../src/constants/Goal';
import Goal from './goals/[goal]';

export default function Goals() {
  const [filteredGoals, setFilteredGoals] = useState<IGoal[]>(testGoals);

  return (
    <View>
      <FlatList
        data={filteredGoals}
        renderItem={({ item }) => <Goal {...item} />}
      ></FlatList>
    </View>
  );
}
