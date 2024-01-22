import { Stack, router } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from '../src/utils/GlobalStyle';
import { Provider as PaperProvider } from 'react-native-paper';

function CreateButton() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        router.push('/createGoal');
      }}
    >
      <FontAwesome5 name={'plus'} size={20} color={'#ffffff'} />
    </TouchableOpacity>
  );
}

const RootLayout = () => {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: 'Home',
            headerRight: () => <CreateButton />,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="goals/[id]"
          options={{
            headerTitle: 'Goal',
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="createGoal"
          options={{
            headerTitle: 'Add Goal',
          }}
        ></Stack.Screen>
      </Stack>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GlobalStyle.colors.gradientStart,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootLayout;
