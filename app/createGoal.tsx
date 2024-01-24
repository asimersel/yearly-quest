import { View, StyleSheet } from 'react-native';
import MyMenu from './componens/MyMenu';
import MyTextInput from './componens/MyTextInput';
import MyButton from './componens/MyButton';
import {
  CadenceOptions,
  GoalCategory,
  IGoal,
  GoalAdjustmentOptions,
} from '../src/models/Goal';
import { useState } from 'react';
import { testGoals } from '../src/constants/Goal';
import { useNavigation } from '@react-navigation/native';

const CreateGoal = () => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const [category, setCategory] = useState('');
  const [cadence, setCadence] = useState('');
  const [goalAdjustment, setGoalAdjustment] = useState('');

  const handleGoalChange = (newValue: string) => {
    setGoal(newValue);
  };

  const handleCategoryChange = (newValue: string) => {
    setCategory(newValue);
  };

  const handleCadenceChange = (newValue: string) => {
    setCadence(newValue);
  };

  const handleGoalAdjustmentChange = (newValue: string) => {
    setGoalAdjustment(newValue);
  };

  const createGoal = () => {
    if (!category || !cadence || !goal || !goalAdjustment) {
      return;
    }
    const newGoal: IGoal = {
      id: '55',
      category: category as GoalCategory,
      title: goal,
      cadence: cadence as CadenceOptions,
      minOrMax: goalAdjustment,
      current: 0,
    };
    testGoals.unshift(newGoal);
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <View style={{ marginHorizontal: 20 }}>
        <MyTextInput
          label="Goal"
          onInputChange={handleGoalChange}
        ></MyTextInput>
      </View>
      <MyMenu
        enum={GoalCategory}
        title={'Category'}
        onPres={handleCategoryChange}
      />
      <MyMenu
        enum={CadenceOptions}
        title={'Cadence'}
        onPres={handleCadenceChange}
      />
      <MyMenu
        enum={GoalAdjustmentOptions}
        title={'Goal Adjustment'}
        onPres={handleGoalAdjustmentChange}
      />
      <MyButton
        callback={createGoal}
        isDisabled={!category || !cadence || !goal || !goalAdjustment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 0.9,
    justifyContent: 'space-evenly',
  },
});

export default CreateGoal;
