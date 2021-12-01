import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";


const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button title="Click"  onPress={() => navigation.navigate('Home')} />
      
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
