import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 54,
    backgroundColor: "#83D6E3",
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  listArea: {
    marginVertical: 30,
  },
  area: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
  },
  imageIcon: {
    width: 88,
    height: 88,
    borderRadius: 20,
  },
  infoArea: {
    marginLeft: 20,
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  seeProfileButton: {
    width: 85,
    height: 26,
    borderColor: "#4EADBE",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  seeProfileButtonText: {
    fontSize: 13,
    color: "#268596",
  },
  starsArea: {
    flexDirection: "row",
  },
  starText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
    color: "#737373",
  },
  modalArea: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalBody: {
    backgroundColor: "#83D6E3",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  modalItem: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  userInfoModal: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatarModal: {
    width: 56,
    height: 56,
    borderRadius: 20,
    marginRight: 15,
  },
  userNameModal: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  serviceInfoModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceNameModal: {
    fontSize: 16,
    fontWeight: "bold",
  },
  servicePriceModal: {
    fontSize: 16,
    fontWeight: "bold",
  },
  finishButton: {
    backgroundColor: "#268596",
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  finishButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  dateInfo: {
    flexDirection: "row",
  },
  dateTitleArea: {
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  dateNextArea: {
    flex: 1,
    alignItems: "flex-start",
  },
  datePrevArea: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default styles;
