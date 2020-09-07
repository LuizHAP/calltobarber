import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

import BarberItem from "../../components/BarberItem";

import { useNavigation } from "@react-navigation/native";

import MyLocationIcon from "../../assets/my_location.svg";

import Api from "../../Api";

import styles from "./style";

function Home() {
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    handleLocationFinder();
    getBarbers();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  };

  const handleLocationFinder = async () => {
    setLoading(true);
    setLocationText("");
    setList([]);
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    getBarbers();
  };

  const handleLocationSearch = () => {
    setLocation({});
    getBarbers();
  }

  const getBarbers = async () => {
    setList([]);
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    let lat = null;
    let lng = null;

    if (location) {
      lat = location.coords.latitude;
      lng = location.coords.longitude;
    }

    let res = await Api.getBarbers(lat, lng, locationText);
    if (res.error == "") {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerArea}>
          <Text style={styles.headerText} numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </Text>
          <Ionicons
            name="ios-search"
            size={26}
            color={"#FFF"}
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Onde você está?"
            placeholderTextColor="#FFF"
            underlineColorAndroid="transparent"
            value={locationText}
            onChangeText={(t) => setLocationText(t)}
            onEndEditing={handleLocationSearch}
          />
          <MyLocationIcon
            width="24"
            height="24"
            fill="#FFF"
            onPress={handleLocationFinder}
          />
        </View>
        {loading && (
          <ActivityIndicator size="large" color="#FFF" style={styles.loading} />
        )}
        {list.map((barber, k) => (
          <BarberItem key={k} barber={barber} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Home;
