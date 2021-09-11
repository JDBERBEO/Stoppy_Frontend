import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Home = () => {
    const navigation = useNavigation()
    useEffect(() => {
      AsyncStorage.getItem('token').then((token) => {
        // if (token) navigation.navigate('gameSelection')
      })
    }, [])
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Image source={require("../assets/Stoppy_big_Logo-NoBk.png")} style={styles.imageLogo} resizeMode="contain" />
          <Text style={styles.text}>Welcome to stoppy! Please signin or create your account:</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('signin')} style={styles.signin}><Image source={require("../assets/signinFinal.png")} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('signup')} style={styles.signin}><Image source={require("../assets/signupFinal.png")} /></TouchableOpacity>
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
      marginTop: "6%"
    },
    signin: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
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