import React from "react";
import { TextInput, View } from "react-native";

import styles from "./style";

const SignIn = ({ placeholder, value, onChangeText, password }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#268596"
      onChangeText={onChangeText}
      secureTextEntry={password}
    />
  );
};

export default SignIn;
