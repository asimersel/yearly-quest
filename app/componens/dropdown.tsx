import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
// import GlobalStyle from '../../src/utils/GlobalStyle';
import { GenericEnumPickerProps } from '../../src/models/Goal';

function DropDown<T extends Record<string, string | number>>({
  enum: enumObject,
  initialValue,
  title,
}: GenericEnumPickerProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T[keyof T]>(initialValue);

  return (
    <View style={styles.body}>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {Object.keys(enumObject).map((key) => {
          return (
            <Picker.Item
              key={key}
              label={enumObject[key].toString()}
              value={enumObject[key]}
            />
          );
        })}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: GlobalStyle.colors.lightBg,
  },
  title: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: 25,
    // color: GlobalStyle.colors.primary,
  },
  picker: {
    // flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default DropDown;
