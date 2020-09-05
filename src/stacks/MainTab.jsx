import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Appointments from "../screens/Appointments";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

import styles from "./style";

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainTab() {
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
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={size}
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
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-search"
                size={size}
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
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-today"
                size={size}
                color={focused ? "#FFFFFF" : "#83D6E3"}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
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
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-person"
                size={size}
                color={focused ? "#FFFFFF" : "#83D6E3"}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
