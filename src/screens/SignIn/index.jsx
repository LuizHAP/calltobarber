import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SignInput from "../../components/SignInput";

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

import styles from "./style";

function SignIn() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
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
