import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Barber from "../screens/Barber";
import MainTab from "./MainTab";

const { Navigator, Screen } = createStackNavigator();

export default function MainStack() {
  return (
    <Navigator
      initialRouteName="Preload"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Preload" component={Preload} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="MainTab" component={MainTab} />
      <Screen name="Barber" component={Barber} />
    </Navigator>
  );
}
