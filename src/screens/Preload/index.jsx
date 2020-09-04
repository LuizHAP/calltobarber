import React, { useEffect, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from "../../contexts/UserContext";

import BarberLogo from "../../assets/barber.svg";

import styles from "./style";

import Api from "../../Api";

function Preload() {
  const navigation = useNavigation();

  const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem("token", res.token);
          userDispatch({
            type: "setAvatar",
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          navigation.navigate("SignIn");
        }
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
