import * as React from 'react';
import { TextInput } from 'react-native-paper';

type TextInputProps = {
  label: string;
};

const MyTextInput: React.FC<TextInputProps> = ({ label }) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
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
