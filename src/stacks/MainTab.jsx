import React, { useContext } from "react";
import { View, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserContext } from "../contexts/UserContext";

import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Appointments from "../screens/Appointments";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

import styles from "./style";

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainTab() {
  const { state: user } = useContext(UserContext);
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#4EADBE",
          height: 60,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={20}
                color={focused ? "#FFFFFF" : "#83D6E3"}
              />
            );
          },
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-search"
                size={20}
                color={focused ? "#FFFFFF" : "#83D6E3"}
              />
            );
          },
        }}
      />
      <Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  marginTop: -40,
                  height: 70,
                  width: 70,
                  borderRadius: 58,
                  borderColor: "#4EADBE",
                  borderWidth: 3,
                  backgroundColor: "#FFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="ios-today" size={26} color={"#4EADBE"} />
              </View>
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={20}
                color={focused ? "#FFFFFF" : "#83D6E3"}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {user.avatar != "" ? (
                  <Image
                    source={{ uri: user.avatar }}
                    style={styles.imageIcon}
                  />
                ) : (
                  <Ionicons
                    name="ios-person"
                    size={20}
                    color={focused ? "#FFFFFF" : "#83D6E3"}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Navigator>
  );
}
