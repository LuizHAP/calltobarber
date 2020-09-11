import React from "react";
import { Text, View, Modal, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

import ExpandIcon from "../assets/expand.svg";

const BarberModal = ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const handleCloseButton = () => {
    setShow(false);
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
          <RectButton style={styles.closeButton} onPress={handleCloseButton}>
            <ExpandIcon width={40} height={40} fill="#000" />
          </RectButton>
          <View style={styles.modalItem}>
            <View style={styles.userInfoModal}>
              <Image
                style={styles.userAvatarModal}
                source={{ uri: user.avatar }}
              />
              <Text style={styles.userNameModal}>{user.name}</Text>
            </View>
          </View>
          {service != null && (
            <View style={styles.modalItem}>
              <View style={styles.serviceInfoModal}>
                <Text style={styles.serviceNameModal}>
                  {user.service[service].name}
                </Text>
                <Text style={styles.servicePriceModal}>
                  {user.service[service].price}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default BarberModal;
