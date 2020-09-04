import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SignInput from "../../components/SignInput";

import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from "../../contexts/UserContext";

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

import styles from "./style";

import Api from "../../Api";

function SignIn() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);

  const handleSignClick = async () => {
    if (emailInput != "" && passwordInput != "") {
      let json = await Api.signIn(emailInput, passwordInput);
      if (json.token) {
        await AsyncStorage.setItem("token", json.token);
        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}]
        })
      } else {
        alert("E-mail e/ou senha errados!");
      }
    } else {
      alert("Preencha os campos");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <View style={styles.container}>
      <BarberLogo width="100%" height="160" />
      <View style={styles.signInArea}>
        <SignInput
          placeholder="Digite o seu email"
          value={emailInput}
          onChangeText={(t) => setEmail(t)}
        />
        <SignInput
          placeholder="Digite a sua senha"
          value={passwordInput}
          onChangeText={(t) => setPassword(t)}
          password={true}
        />
        <RectButton style={styles.signInButton} onPress={handleSignClick}>
          <Text style={styles.signInButtonText}>LOGIN</Text>
        </RectButton>
      </View>
      <RectButton style={styles.signButton} onPress={handleMessageButtonClick}>
        <Text style={styles.signButtonText}>Ainda não possui uma conta?</Text>
        <Text style={styles.signButtonTextBold}>Cadastre-se</Text>
      </RectButton>
    </View>
  );
}

export default SignIn;
