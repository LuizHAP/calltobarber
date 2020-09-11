import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

import Stars from "../../components/Stars";
import BarberModal from '../../components/BarberModal'

import FavoriteFullIcon from "../../assets/favorite_full.svg";
import FavoriteIcon from "../../assets/favorite.svg";
import BackIcon from "../../assets/back.svg";
import NavPrevIcon from "../../assets/nav_prev.svg";
import NavNextIcon from "../../assets/nav_next.svg";

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

  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if (json.error == "") {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);
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

  const handleServiceChoose = (key) => {
    setSelectedService(key);
    setShowModal(true);
  }

  const handleFavClick = () => {
    setFavorited(!favorited);
    Api.setFavorite(userInfo.id);
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
          <View style={styles.fakeSwiper} />
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
            <RectButton style={styles.userFavButton} onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#FF0000" />
              )}
            </RectButton>
          </View>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#000"
              style={styles.loading}
            />
          )}
          {userInfo.services && (
            <View style={styles.serviceArea}>
              <Text style={styles.servicesTitle}>Lista de Serviços</Text>
              {userInfo.services.map((item, key) => (
                <View style={styles.serviceItem} key={key}>
                  <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>{item.name}</Text>
                    <Text style={styles.servicePrice}>R$ {item.price}</Text>
                  </View>
                  <RectButton style={styles.serviceChooseButton} onPress={()=>handleServiceChoose(key)}>
                    <Text style={styles.serviceChooseButtonText}>Agendar</Text>
                  </RectButton>
                </View>
              ))}
            </View>
          )}
          {userInfo.testimonials && userInfo.testimonials.length > 0 ? (
            <View style={styles.testimonialArea}>
              <Swiper
                style={{ height: 110 }}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width="35" height="35" fill="#000" />}
                nextButton={<NavNextIcon width="35" height="35" fill="#000" />}
              >
                {userInfo.testimonials.map((item, key) => (
                  <View style={styles.testimonialsItem} key={key}>
                    <View style={styles.testimonialsInfo}>
                      <Text style={styles.testimonialsName}>{item.name}</Text>
                      <Stars stars={item.rate} showNumber={false} />
                    </View>
                    <Text style={styles.testimonialsBody}>{item.body}</Text>
                  </View>
                ))}
              </Swiper>
            </View>
          ) : null}
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

      <BarberModal show={showModal} setShow={setShowModal} user={userInfo} service={selectedService}/>
    </View>
  );
}

export default Barber;
