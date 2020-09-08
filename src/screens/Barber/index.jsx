import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Swiper from "react-native-swiper";

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
      } else {
        alert("Erro: " + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView styl={styles.scroller}>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{ height: 240 }}
            dot={<View style={styles.swipeDot} />}
            activeDot={<View style={styles.swipeDotActive} />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => {
              <View style={styles.swipeItem} key={key}>
                <Image style={styles.swipeImage} source={{uri: item.uri}} resizeMode="cover"/>
              </View>
            })}
          </Swiper>
        ) : (
          <View style={styles.fakeSwiper}></View>
        )}
        <View style={styles.pageBody}>
          <View style={styles.userInfoArea}></View>
          <View style={styles.serviceArea}></View>
          <View style={styles.testimonialArea}></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Barber;
