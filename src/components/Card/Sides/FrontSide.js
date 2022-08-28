import { TouchableOpacity, Text } from "react-native";
import { Avatar } from "@react-native-material/core";

import { cardItemStyles as styles } from "../../../styles/CardItemStyles";

const FrontSide = ({ item, handlePress }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={[styles.card, styles.card1]}
    onPress={handlePress}
  >
    {item?.img?.length ? (
      <Avatar image={{ uri: item.img }} size={100} />
    ) : (
      <Avatar label={item.name} autoColor size={100} />
    )}

    <Text style={[styles.label, styles.topSpacing]}>{item.name}</Text>
  </TouchableOpacity>
);

export default FrontSide;
