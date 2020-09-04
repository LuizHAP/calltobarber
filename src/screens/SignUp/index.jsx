import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import SignInput from "../../components/SignInput";

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

import styles from "./style";

function SignUp() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [nameInput, setName] = useState("");

  const navigation = useNavigation();

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  };

  return (
    <View style={styles.container}>
      <BarberLogo width="100%" height="160" />
      <View style={styles.signInArea}>
      <SignInput
          placeholder="Digite o seu nome"
          value={nameInput}
          onChangeText={(t) => setEmail(t)}
        />
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
          <Text style={styles.signInButtonText}>CADASTRAR</Text>
        </RectButton>
      </View>
      <RectButton style={styles.signButton} onPress={handleMessageButtonClick}>
        <Text style={styles.signButtonText}>Já possui uma conta?</Text>
        <Text style={styles.signButtonTextBold}>Faça Login</Text>
      </RectButton>
    </View>
  );
}

export default SignUp;
