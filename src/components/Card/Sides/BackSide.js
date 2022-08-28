import { TouchableOpacity, Text } from "react-native";

import { cardItemStyles as styles } from "../../../styles/CardItemStyles";

const BackSide = ({ item, handlePress }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={[styles.card, styles.card2]}
    onPress={handlePress}
  >
    {item?.type?.length ? (
      <Text style={styles.label}>Type: {item.type}</Text>
    ) : null}
    {item?.rarity?.length ? (
      <Text style={styles.label}>Rarity: {item.rarity}</Text>
    ) : null}
    {item?.cardSet?.length ? (
      <Text style={styles.label}>Card Set: {item.cardSet}</Text>
    ) : null}
    {item?.playerClass?.length ? (
      <Text style={styles.label}>Player Class: {item.playerClass}</Text>
    ) : null}
    {item?.mechanics?.length ? (
      <Text style={styles.label}>
        Mechanics: {item?.mechanics?.map?.((item) => item?.name)?.join(", ")}
      </Text>
    ) : null}
  </TouchableOpacity>
);

export default BackSide;
