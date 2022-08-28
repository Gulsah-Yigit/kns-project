import { Text, SafeAreaView, StyleSheet } from "react-native";
import { useStateValue } from "../context";

import ListItems from "../components/ListItems";
import { TEXTS } from "../constants";

const CardItemsScreen = () => {
  const [{ selectedKey, data }] = useStateValue();
  const dataList = data[selectedKey];

  return (
    <SafeAreaView style={styles.container}>
      {dataList.length ? (
        <ListItems dataList={dataList} />
      ) : (
        <Text style={styles.title}>{TEXTS.NO_ITEM}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    marginTop: 50,
    fontSize: 20,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CardItemsScreen;
