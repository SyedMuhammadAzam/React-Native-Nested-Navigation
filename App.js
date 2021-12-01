import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
import Settings from "./screens/Settings/Settings";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#3090D1" },
  headerTitleStyle: { color: "white" },
  headerTintStyle: { color: "#FFFFFF" },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
