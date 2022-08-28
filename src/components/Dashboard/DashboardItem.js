import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { useStateValue } from "../../context";
import { actionTypes } from "../../context/reducer";

import { PATHS } from "../../constants";

const DashboardItem = ({ item, navigation }) => {
  const [{}, dispatch] = useStateValue();

  const handlePress = (name) => {
    dispatch({
      type: actionTypes.SET_KEY,
      selectedKey: name,
    });

    navigation.navigate(PATHS.CARDS, {
      selectedItem: name,
    });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e2874380",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "start",
    color: "#3e3118",
  },
});

export default DashboardItem;
