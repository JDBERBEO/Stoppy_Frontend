import React, { useState, useRef } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { playerSignin } from '../store/playerSigninReducer';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client'

export const JoinGame = () => {
  const ref = useRef()
  const dispatch = useDispatch();
  const [gameId, setGameID] = useState('')
//   const navigation = useNavigation()

const handleSubmit = () => {
  ref.current = io('http://localhost:8000')
  ref.current.emit('joinGame', gameId)
  ref.current.join(gameId)
    
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