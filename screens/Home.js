import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';



export const Home = () => {
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Image source={require("../assets/Stoppy_big_Logo-NoBk.png")} style={styles.imageLogo} resizeMode="contain" />
          <Text style={styles.text}>Welcome to stoppy! Please signin or create your account:</Text>
          <Button title="Signin" onPress={()=> navigation.navigate('signin')}/>
          <Button title="Signup" onPress={()=> navigation.navigate('signup')}/>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    )
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
      marginLeft: "20%",
      marginTop: "-10%"
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