import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import socket from './socket'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const JoinGame = () => {
  const navigation = useNavigation()
  const [gameId, setGameID] = useState('')

  const getData = async () =>  await AsyncStorage.getItem('token')

  const handleSubmit = async () => {
  socket.emit('joinGame', gameId)
  const token = await getData()
  socket.emit('playerToken', {token})
  navigation.navigate('createGame')
}
  

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Insert game Url: </Text>
            <TextInput style={styles.input} onChangeText={value => setGameID(value)} value={gameId}/>
            <Button
              title="Submit"
              onPress={handleSubmit}
            />
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
      alignItems: "center",
    },
    input: {

      borderBottomColor: "blue",
      borderBottomWidth: 1,
      borderWidth: 0,
      padding: 10,
      marginBottom: "5%"
    },
  })