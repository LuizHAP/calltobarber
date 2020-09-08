import React from "react";
import { Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { RectButton } from "react-native-gesture-handler";

import Api from '../../Api'

import styles from "./style";

function Profile() {

  const navigator = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    navigator.reset({
      routes: [{name: 'SignIn'}]
    })
  }

  return (
    <View>
      <Text>Profile</Text>
      <RectButton style={styles.logoutButton} onPress={handleLogoutClick}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </RectButton>
    </View>
  );
}

export default Profile;
