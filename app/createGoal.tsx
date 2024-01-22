import { View, StyleSheet } from 'react-native';
import DropdownMenu from './componens/DropdownMenu';
import MyTextInput from './componens/MyTextInput';
import MyButton from './componens/MyButton';
import { CadenceOptions, GoalCategory } from '../src/models/Goal';

const CreateGoal = () => {
  return (
    <View style={styles.body}>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <MyTextInput label="Goal"></MyTextInput>
      </View>
      <DropdownMenu
        enum={GoalCategory}
        initialValue={GoalCategory.health}
        title={'Category'}
      />
      <DropdownMenu
        enum={CadenceOptions}
        initialValue={CadenceOptions.biweekly}
        title={'Cadence'}
      />
      <MyButton />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default CreateGoal;
