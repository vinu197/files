import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Login</Text>

      <Button
        title="Click"
        onPress={() => navigation.navigate("Fire")} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;