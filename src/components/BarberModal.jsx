import React, { useState, useEffect } from "react";
import { Text, View, Modal, Image, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

import ExpandIcon from "../assets/expand.svg";
import NavPrevIcon from "../assets/nav_prev.svg";
import NavNextIcon from "../assets/nav_next.svg";

import Api from "../Api";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const BarberModal = ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  useEffect(() => {
    if (user.available) {
      let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); //quantos dias tem um mês tem
      let newListDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);

        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        let selDate = `${year}-${month}-${day}`;

        let availability = user.available.filter((e) => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[d.getDay()],
          number: i,
        });
      }
      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  useEffect(() => {
    if (user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      let selDate = `${year}-${month}-${day}`;

      let availability = user.available.filter((e) => e.date === selDate);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
    setSelectedHour(null);
  }, [user, selectedDay]);

  const handleLeftDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

  const handleRightDateClick = () => {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  };

  const handleCloseButton = () => {
    setShow(false);
  };

  const handleFinishClick = async () => {
    if (
      user.id &&
      service != null &&
      selectedYear > 0 &&
      selectedMonth > 0 &&
      selectedDay > 0 &&
      selectedHour != null
    ) {
      let res = await Api.setAppointment(
        user.id,
        service,
        selectedDay,
        selectedHour,
        selectedMonth,
        selectedYear
      );
      if (res.error == "") {
        setShow(false);
        navigation.navigate('Appointments');
      } else {
        alert(res.error);
      }
    } else {
      alert("Preencha todos os dados");
    }
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
          <RectButton style={styles.closeButton} onPress={handleCloseButton}>
            <ExpandIcon width={40} height={40} fill="#000" />
          </RectButton>
          <View style={styles.modalItem}>
            <View style={styles.userInfoModal}>
              <Image
                style={styles.userAvatarModal}
                source={{ uri: user.avatar }}
              />
              <Text style={styles.userNameModal}>{user.name}</Text>
            </View>
          </View>
          {service != null && (
            <View style={styles.modalItem}>
              <View style={styles.serviceInfoModal}>
                <Text style={styles.serviceNameModal}>
                  {user.services[service].name}
                </Text>
                <Text style={styles.servicePriceModal}>
                  R$ {user.services[service].price.toFixed(2)}
                </Text>
              </View>
            </View>
          )}
          <View style={styles.modalItem}>
            <View style={styles.dateInfo}>
              <RectButton
                style={styles.datePrevArea}
                onPress={handleLeftDateClick}
              >
                <NavPrevIcon width="35" height="35" fill="#000" />
              </RectButton>
              <View style={styles.dateTitleArea}>
                <Text style={styles.dateTitle}>
                  {months[selectedMonth]} {selectedYear}
                </Text>
              </View>
              <RectButton
                style={styles.dateNextArea}
                onPress={handleRightDateClick}
              >
                <NavNextIcon width="35" height="35" fill="#000" />
              </RectButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator
              style={styles.scrollerDateList}
            >
              {listDays.map((item, key) => (
                <RectButton
                  style={{
                    width: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    paddingVertical: 5,
                    opacity: item.status ? 1 : 0.5,
                    backgroundColor:
                      item.number === selectedDay ? "#4EADBE" : "#FFF",
                  }}
                  key={key}
                  onPress={() => {
                    item.status ? setSelectedDay(item.number) : null;
                  }}
                >
                  <Text
                    style={{
                      color: item.number === selectedDay ? "#FFF" : "#000",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {item.weekday}
                  </Text>
                  <Text
                    style={{
                      color: item.number === selectedDay ? "#FFF" : "#000",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {item.number}
                  </Text>
                </RectButton>
              ))}
            </ScrollView>
          </View>
          {selectedDay > 0 && listHours.length > 0 && (
            <View style={styles.modalItem}>
              <ScrollView
                style={styles.scrollerTimeList}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {listHours.map((item, key) => (
                  <RectButton
                    style={{
                      width: 75,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      backgroundColor:
                        item === selectedHour ? "#4EADBE" : "#FFF",
                    }}
                    key={key}
                    onPress={() => {
                      setSelectedHour(item);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: item === selectedHour ? "#FFF" : "#000",
                        fontWeight: item === selectedHour ? "bold" : "normal",
                      }}
                    >
                      {item}
                    </Text>
                  </RectButton>
                ))}
              </ScrollView>
            </View>
          )}

          <RectButton style={styles.finishButton} onPress={handleFinishClick}>
            <Text style={styles.finishButtonText}>Finalizar agendamento</Text>
          </RectButton>
        </View>
      </View>
    </Modal>
  );
};

export default BarberModal;
