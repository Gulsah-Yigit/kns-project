import { useRef } from "react";

import CardFlip from "react-native-card-flip";

import BackSide from "./Sides/BackSide";
import FrontSide from "./Sides/FrontSide";

import { cardItemStyles as styles } from "../../styles/CardItemStyles";

const CardItem = ({ item }) => {
  const cardFlipRef = useRef();

  const handlePress = () => cardFlipRef.current.flip();

  return (
    <CardFlip
      style={styles.cardContainer}
      ref={(card) => (cardFlipRef.current = card)}
    >
      <FrontSide item={item} handlePress={handlePress} />
      <BackSide item={item} handlePress={handlePress} />
    </CardFlip>
  );
};

export default CardItem;
