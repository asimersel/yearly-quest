import { View, Text, StyleSheet } from 'react-native';
import { IGoal } from '../../src/models/Goal';

const Goal = (goal: IGoal) => {
  return (
    <View style={styles.body}>
      <Text style={styles.category}>{goal.category}</Text>
      <Text style={styles.cadence}>{goal.cadence}</Text>
      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.current}>{goal.current}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#ffff',
  },
  category: {
    flex: 1,
  },
  cadence: {
    flex: 1.5,
  },
  title: {
    flex: 4,
  },
  current: {
    flex: 0.5,
  },
});

export default Goal;
