import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
// import { playerSignin } from '../store/playerSigninReducer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GameSelection = () => {
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          if(value !== null) {
            console.log('token desde game selection', value)
          }
        } catch(e) {
          console.log('e', e)
        }
      }
      
   const token = getData()

      console.log('token desde game selection', token)

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
                <Text>prueba</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    imageLogo: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    text:{
      textAlign:"center",
      alignItems: "flex-start",
    },
    input: {

      borderBottomColor: "blue",
      borderBottomWidth: 1,
      borderWidth: 0,
      padding: 10,
      marginBottom: "5%"
    },
  })