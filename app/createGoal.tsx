import { View, StyleSheet } from 'react-native';
import { CadenceOptions, GoalCategory } from '../src/models/Goal';
import GlobalStyle from '../src/utils/GlobalStyle';
import DropDown from './componens/dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

const CreateGoal = () => {
  return (
    <View style={styles.body}>
      {/* <TextInput /> */}
      <DropDown
        enum={GoalCategory}
        initialValue={GoalCategory.health}
        title={'Category'}
      />
      <DropDown
        enum={CadenceOptions}
        initialValue={CadenceOptions.biweekly}
        title={'Cadence'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: GlobalStyle.colors.lightBg,
  },
});

export default CreateGoal;
