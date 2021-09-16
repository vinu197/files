import React from "react";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Login Here</Text>

      <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Name" maxLength={10}/>
        <TextInput style={{borderWidth:1,borderColor:'#ccc',   width:250,padding:10,margin:5}} placeholder="Enter Password" maxLength={8} secureTextEntry={true}/>
      <Button
        title="Login"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
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

export default Home;