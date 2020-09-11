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
  userInfoArea:{
    flexDirection: "row",
    marginTop: -30,
  },
  userAvatar:{
    width: 110,
    height: 110,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 20,
    borderWidth: 4,
    borderColor: "#FFFFFF"
  },
  userInfo:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  userInfoName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  userFavButton:{
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderColor: "#999999",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginTop: 10,
  },
  backButton:{
    position: "absolute",
    left: 0,
    top: 20,
    zIndex: 9,
  },
  fakeSwiper:{
    height: 250,
    backgroundColor: "#63C2D1"
  },
  loading: {
    marginTop: 50,
  },
  serviceArea:{
    marginTop: 20,
  },
  servicesTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#268596",
    marginLeft: 20,
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20
  },
  serviceInfo: {
    flex: 1
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#268596"
  },
  servicePrice: {
    fontSize: 14,
    color: "#268596"
  },
  serviceChooseButton: {
    backgroundColor: '#4EADBE',
    borderRadius: 10,
    padding: '10 15',
  },
  serviceChooseButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#FFF"
  }
});

export default styles;
