import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Stars from './Stars'

import styles from "./style";

const BarberItem = ({ barber }) => {
  return (
    <View style={styles.area}>
      <Image style={styles.imageIcon} source={{ uri: barber.avatar }} />
      <View style={styles.infoArea}>
        <Text style={styles.userName}>{barber.name}</Text>
        <Stars stars={barber.stars} showNumber={true}/>
        <RectButton style={styles.seeProfileButton}>
          <Text style={styles.seeProfileButtonText}>Ver perfil</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default BarberItem;
