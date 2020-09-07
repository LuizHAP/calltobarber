import React from "react";
import { View, Image, Text, Button } from "react-native";

import styles from "./style";

const BarberItem = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.area}>
      <Image source={{ uri: data.avatar }} style={styles.imageIcon} />
      <View style={styles.infoArea}>
        <Text style={styles.userName}>{data.name}</Text>
        <View style={styles.seeProfileButton}>
          <Button>Ver perfil</Button>
        </View>
      </View>
    </View>
  );
};

export default BarberItem;
