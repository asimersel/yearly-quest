import * as React from 'react';
import { TextInput } from 'react-native-paper';

type TextInputProps = {
  label: string;
  onInputChange: (value: string) => void;
};

const MyTextInput: React.FC<TextInputProps> = ({ label, onInputChange }) => {
  return (
    <TextInput
      label={label}
      onChangeText={(text) => onInputChange(text)}
      mode="outlined"
      style={{
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
      }}
    />
  );
};

export default MyTextInput;
