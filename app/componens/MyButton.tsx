import { Button } from 'react-native-paper';

const MyButton = () => {
  return (
    <Button
      icon="plus-circle"
      mode="contained"
      onPress={() => console.log('Pressed')}
      style={{ margin: 10 }}
    >
      Create
    </Button>
  );
};

export default MyButton;
