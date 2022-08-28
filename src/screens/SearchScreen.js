import { useState, useEffect } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Vibration,
  Keyboard,
} from "react-native";

import {
  TextInput,
  ActivityIndicator,
  Button,
} from "@react-native-material/core";

import { searchCard } from "../axios";

import ListItems from "../components/ListItems";
import { TEXTS } from "../constants";

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setData([]);

    Keyboard.dismiss();

    searchCard(inputValue, setData, setIsLoading);
  };

  useEffect(() => {
    if (data.length) {
      Vibration.vibrate();
    }
  }, [data]);

  return (
    <SafeAreaView>
      <TextInput
        variant="standard"
        color="#444"
        label={TEXTS.SEARCH}
        placeholder={TEXTS.SEARCH_PLACEHOLDER}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
        style={styles.textInputMargin}
      />
      <Button
        disabled={!inputValue.trim().length || isLoading}
        onPress={handleSearch}
        variant="text"
        style={{ marginHorizontal: 20 }}
        title={TEXTS.SEARCH}
        color="#FE474C"
      />

      {data.length ? (
        <View style={styles.container}>
          <ListItems dataList={data} />
        </View>
      ) : null}

      {!data.length && isLoading ? (
        <ActivityIndicator size="large" color="#FE474C" />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputMargin: {
    margin: 25,
  },
});

export default SearchScreen;
