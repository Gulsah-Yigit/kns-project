import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { PATHS } from "../constants";

const SearchButton = ({ navigation, color = "black" }) => (
  <TouchableOpacity onPress={() => navigation.navigate(PATHS.SEARCH)}>
    <Entypo name="magnifying-glass" size={28} color={color} />
  </TouchableOpacity>
);

export default SearchButton;
