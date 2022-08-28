import { StyleSheet } from "react-native";

export const cardItemStyles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 260,
    marginTop: 15,
  },
  card: {
    backgroundColor: "#FE474C",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#e2874377",
  },
  label: {
    marginVertical: "auto",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Helvetica",
  },
  topSpacing: {
    marginTop: 10,
  },
});
