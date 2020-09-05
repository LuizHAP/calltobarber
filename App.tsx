import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import UserContextProvider from "./src/contexts/UserContext";
import MainStack from "./src/stacks/MainStack";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
        <StatusBar style="light" />
      </NavigationContainer>
    </UserContextProvider>
  );
}
