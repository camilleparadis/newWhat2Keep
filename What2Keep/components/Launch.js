import { ImageBackground, StyleSheet, View, Button, Text, Image, TouchableOpacity } from "react-native";
import React, {useState} from "react";

export default function Launch({ navigation }) {
  return (
  <ImageBackground source = {require('../assets/launchBackground.png')}
  resizeMode = "cover"
  style = {styles.image}>
    <View style = {styles.image}>
      <Image
        source={require('../assets/W2KLogo.png')}
        style={{ width: 200, height: 200}}
      />
    </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
        underlayColor='#fff'>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
        underlayColor='#fff'>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#CCC6CE',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
