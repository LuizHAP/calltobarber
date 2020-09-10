import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import Stars from "../../components/Stars";

import FavoriteIcon from "../../assets/favorite.svg";
import BackIcon from "../../assets/back.svg";

import styles from "./style";

import Api from "../../Api";

function Barber() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if (json.error == "") {
        setUserInfo(json.data);
        console.log(json.data);
      } else {
        alert("Erro: " + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, []);

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView styl={styles.scroller}>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{ height: 250 }}
            dot={<View style={styles.swipeDot} />}
            activeDot={<View style={styles.swipeDotActive} />}
            paginationStyle={{ top: 30, right: 15, bottom: null, left: null }}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => (
              <View style={styles.swipeItem} key={key}>
                <Image
                  style={styles.swipeImage}
                  source={{ uri: item.url }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        ) : (
          <View style={styles.fakeSwiper}></View>
        )}
        <View style={styles.pageBody}>
          <View style={styles.userInfoArea}>
            <Image
              style={styles.userAvatar}
              source={{ uri: userInfo.avatar }}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userInfoName}>{userInfo.name}</Text>
              <Stars stars={userInfo.stars} showNumber={true} />
            </View>
            <RectButton style={styles.userFavButton}>
              <FavoriteIcon width="24" height="24" fill="#FF0000" />
            </RectButton>
          </View>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#000"
              style={styles.loading}
            />
          )}
          <View style={styles.serviceArea}>
            <Text style={styles.servicesTitle}>List de Serviços</Text>
            {userInfo.service.map((item, key) => {
              <View style={styles.serviceItem} key={key}>
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceName}>{item.name}</Text>
                  <Text style={styles.servicePrice}>R$ {item.price}</Text>
                </View>
                <RectButton
                  style={styles.serviceChooseButton}
                >
                  <Text style={serviceChooseButtonText}>Agendar</Text>
                </RectButton>
              </View>;
            })}
          </View>
          <View style={styles.testimonialArea}></View>
        </View>
      </ScrollView>
      <RectButton style={styles.backButton} onPress={handleBackButton}>
        <BackIcon
          width={44}
          height={44}
          fill="#FFF"
          style={styles.backButton}
        />
      </RectButton>
    </View>
  );
}

export default Barber;
