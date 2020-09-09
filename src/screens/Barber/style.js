import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scroller: {
    flex: 1,
  },
  swipeDot: {
    width: 10,
    height: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    margin: 3,
  },
  swipeDotActive: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    margin: 3,
  },
  swipeItem: {
    flex: 1,
  },
  swipeImage:{
    width: "100%",
    height: 240,
  },
  pageBody:{
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    marginTop: -50,
    minHeight: 400,
  },
});

export default styles;
