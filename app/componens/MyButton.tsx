import { Button } from 'react-native-paper';

interface ButtonProps {
  callback: () => void;
  isDisabled: boolean;
}

const MyButton: React.FC<ButtonProps> = ({ callback, isDisabled }) => {
  return (
    <Button
      icon="plus-circle"
      mode="contained"
      onPress={() => callback()}
      style={{ margin: 10 }}
      disabled={isDisabled}
    >
      Create
    </Button>
  );
};

export default MyButton;
