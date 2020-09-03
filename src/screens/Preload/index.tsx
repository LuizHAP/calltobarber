import React from "react";
import { ActivityIndicator, View } from "react-native";

import styles from "./style";

import BarberLogo from "../../assets/barber.svg";

function Preload() {
  return (
    <View style={styles.container}>
      <BarberLogo width="100%" height="160" />
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );
}

export default Preload;
