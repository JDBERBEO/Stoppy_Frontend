import React, { useEffect, useState } from 'react'
import { Grid, Row } from 'react-native-easy-grid'
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import socket from './socket'
import { useSelector, useDispatch } from 'react-redux';
import { getGame } from '../store/getGameReducer';


export const GameRoom = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [players, setplayers] = useState([])

  const { 
    round, 
    gameId, 
    rounds,
    game
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds,
      game: state.getOneGameReducer.game,
    }
  })


  const handleSubmit = () => {
    console.log('gamId', gameId)
    socket.emit('startGame', gameId)
    navigation.navigate('createGame')
  }
  


  useEffect(() => {
    socket.on('joined', (data)=> {
      console.log('data', data)
      setplayers(data)
    })
    socket.on('gameStarting', () => {
      ('starting game')
      navigation.navigate('createGame')
    })
  }, [])

 

    return (
      <View style={styles.container}>
      <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
        <Grid>
            <Row>
                <Image source={require("../assets/share_this_code.png")} style={styles.imageLogo} resizeMode="contain" ></Image> 
            </Row>  
            <Row>
                <Text selectable={true} style={styles.text}>{gameId}</Text> 
            </Row>
            {!!players && players.length > 0 && players.map((player, i) => (
            <Row key={player._id}><Text>{player.name}</Text></Row>))}
            <Row>
                <Button title='Start Game' onPress={handleSubmit}></Button>
            </Row>
        </Grid>
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
    justifyContent:"center"
  },
  imageLogo: {
    flex:1,
    marginLeft: "0%",
  },
  text:{
    textAlign:"center",
    fontSize: 32,
  },
  textAnswers:{
    textAlign:"center",
    fontSize: 14,
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});