import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Stars from "./Stars";

import styles from "./style";

const BarberItem = ({ barber }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Barber", {
      id: barber.id,
      avatar: barber.avatar,
      name: barber.name,
      stars: barber.stars,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.area}>
        <Image style={styles.imageIcon} source={{ uri: barber.avatar }} />
        <View style={styles.infoArea}>
          <Text style={styles.userName}>{barber.name}</Text>
          <Stars stars={barber.stars} showNumber={true} />
          <RectButton style={styles.seeProfileButton}>
            <Text style={styles.seeProfileButtonText}>Ver perfil</Text>
          </RectButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BarberItem;
