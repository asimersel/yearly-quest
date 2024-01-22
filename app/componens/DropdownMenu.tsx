import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import { GenericEnumPickerProps } from '../../src/models/Goal';

function DropdownMenu<T extends Record<string, string | number>>({
  enum: enumObject,
  title,
}: GenericEnumPickerProps<T>) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectItem = (key: string) => {
    setSelected(enumObject[key].toString());
    setSelectedItem(key);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: 'rgb(120, 69, 172)' }]}>
          {title}
        </Text>
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Text onPress={openMenu} style={styles.title}>
            {selected}
          </Text>
        }
        style={[styles.menu]}
      >
        {Object.keys(enumObject).map((key) => {
          return (
            <Menu.Item
              key={key}
              title={enumObject[key].toString()}
              onPress={() => selectItem(key)}
              style={styles.menuItem}
              titleStyle={styles.menuItemTitle}
            />
          );
        })}
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
  },
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  menu: {
    marginTop: 45,
    width: '60%',
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'white',
  },
  menuItem: {},
  menuItemTitle: {},
});

export default DropdownMenu;
