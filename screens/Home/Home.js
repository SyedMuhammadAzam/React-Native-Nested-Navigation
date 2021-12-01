import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Feed from "../Feed/Feed";
import Messages from "../Messages/Messages";
import { Button } from "react-native-elements";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Click"  onPress={() => navigation.navigate('Feed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <HomeStack.Screen name={"Feed"} component={Feed}  options={{ headerShown: false }}></HomeStack.Screen>
            <HomeStack.Screen name={"Messages"} component={Messages} options={{ headerShown: true }} />
        </HomeStack.Navigator>
    );
  }
  
  export default App;
