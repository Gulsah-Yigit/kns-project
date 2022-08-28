import { FlatList } from "react-native";

import DashboardItem from "./DashboardItem";

const DashboardItemList = ({ dataKeys, navigation }) => (
  <FlatList
    data={dataKeys}
    renderItem={({ item }) => (
      <DashboardItem item={item} navigation={navigation} />
    )}
    keyExtractor={(item) => item}
  />
);

export default DashboardItemList;
