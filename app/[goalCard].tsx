import { View, Text, StyleSheet } from 'react-native';
import { CadenceOptions, GoalCategory, IGoal } from '../src/models/Goal';
import { Link } from 'expo-router';

const Card = (goal: IGoal) => {
  return (
    <View style={styles.body}>
      <Text style={styles.category}>
        {GoalCategory[goal.category as keyof typeof GoalCategory]}
      </Text>
      <Text style={styles.cadence}>
        {CadenceOptions[goal.cadence as keyof typeof CadenceOptions]}
      </Text>
      <Text style={styles.title}>{goal.title}</Text>
      <Text style={styles.current}>{goal.current}</Text>
      <Link href={`/goals/${goal.id}`}>Go</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 30,
    backgroundColor: '#ffff',
  },
  category: {
    flex: 2,
  },
  cadence: {
    flex: 3,
  },
  title: {
    flex: 4,
    marginLeft: 10,
  },
  current: {
    flex: 1,
  },
});

export default Card;
