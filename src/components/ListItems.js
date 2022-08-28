import { FlatList } from "react-native";

import CardItem from "./Card/CardItem";

const ListItems = ({ dataList }) => (
  <FlatList
    data={dataList}
    renderItem={({ item }) => <CardItem item={item} />}
    keyExtractor={(item) => item.dbfId}
  />
);

export default ListItems;
