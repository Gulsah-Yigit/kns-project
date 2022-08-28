import { useEffect } from "react";

import { StyleSheet, StatusBar, SafeAreaView, Vibration } from "react-native";

import { useStateValue } from "../context";
import { actionTypes } from "../context/reducer";
import { fetchData } from "../axios";

import Loader from "../components/Loader";

import DashboardItemList from "../components/Dashboard/DashboardItemList";

const Dashboard = ({ navigation }) => {
  const [{ dataKeys }, dispatch] = useStateValue();

  useEffect(() => {
    const fillState = (data) => {
      dispatch({
        type: actionTypes.SET_DATA,
        data: data,
        dataKeys: Object.keys(data).sort(),
      });
    };

    fetchData(fillState);
  }, []);

  useEffect(() => {
    if (dataKeys?.length) {
      Vibration.vibrate();
    }
  }, [dataKeys]);

  return (
    <SafeAreaView style={styles.container}>
      {dataKeys?.length ? (
        <DashboardItemList dataKeys={dataKeys} navigation={navigation} />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
  },
});

export default Dashboard;
