import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Welcome to stoppy!</Text>

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
  text:{
    textAlign:"center"
  }
});
