import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("")

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
        <Image source={require("./assets/Stoppy_big_Logo-NoBk.png")} style={styles.imageLogo} resizeMode="cover" />
        <Text style={styles.text}>Welcome to stoppy!</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
        <Button title="Ingresa" />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent:"center"
  },
  imageLogo: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%"

  },
  text:{
    textAlign:"center"
  },
  input: {
    height: 40,
    marginHorizontal: 120,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    borderWidth: 0,
    padding: 10,
  },
});
