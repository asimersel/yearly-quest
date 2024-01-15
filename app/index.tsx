import { FlatList, View } from 'react-native';
import { testGoals } from '../src/constants/Goal';
import Goal from './[goalCard]';

export default function Goals() {
  return (
    <View>
      <FlatList
        data={testGoals}
        renderItem={({ item }) => <Goal {...item} />}
      ></FlatList>
    </View>
  );
}
