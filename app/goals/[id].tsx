import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { testGoals } from '../../src/constants/Goal';

const Goal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const goal = testGoals.find((g) => g.id === id);

  return (
    <View style={styles.body}>
      <Text>{goal?.category}</Text>
      <Text>{goal?.cadence}</Text>
      <Text>{goal?.title}</Text>
      <Text>{goal?.current}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default Goal;
