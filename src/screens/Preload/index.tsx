import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import BarberLogo from "../../assets/barber.svg";

import styles from "./style";

function Preload() {

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  });
  
  return (
    <View style={styles.container}>
      <BarberLogo width="100%" height="160" />
      <ActivityIndicator size="large" color="#FFF" style={styles.loading} />
    </View>
  );
}

export default Preload;
