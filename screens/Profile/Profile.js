import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";


const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Click"  onPress={() => navigation.navigate('Settings')} />
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
