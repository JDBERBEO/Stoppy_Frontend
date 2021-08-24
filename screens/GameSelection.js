import React, {useEffect} from 'react'
import { View, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import socket from './socket'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

export const GameSelection = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  
  
  
  const letterGenerator = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    const randomCharacters = alphabet[Math.floor(Math.random() * alphabet.length)]
    + alphabet[Math.floor(Math.random() * alphabet.length)]
    + alphabet[Math.floor(Math.random() * alphabet.length)]
    + alphabet[Math.floor(Math.random() * alphabet.length)]
    + alphabet[Math.floor(Math.random() * alphabet.length)]
    return randomCharacters
  }
  const randomletters = letterGenerator()
 
  const randomlettersArray = randomletters.split('')
 

  const getData = async () =>  await AsyncStorage.getItem('token')

  const handleSubmit = () => {
    getData()
    .then((token) => {

      socket.emit('createGame', { token, randomlettersArray })})
      socket.on('gameId', gameId => {
      dispatch({type: 'ADD_GAMEID', payload: gameId})
      navigation.navigate('createGame')
    })
  }


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
            <Image source={require("../assets/1option.png")} style={styles.imageLogo} resizeMode="contain" />
            <Button title="Create Game" onPress={handleSubmit}/>
            <Button title="Join Game" onPress={()=> navigation.navigate('joinGame')}/>
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