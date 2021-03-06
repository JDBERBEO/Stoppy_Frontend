import React, { useEffect, useState }from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import socket from './socket'
import { useNavigation } from '@react-navigation/native'
import { Round } from '../components/Round';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getGame } from '../store/getGameReducer';


export const CreateGame = () => {
  const [stop, setStop] = useState(false)
  const [player, setPlayerState] = useState([])
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { 
    round, 
    gameId, 
    rounds,
    game,
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds,
      game: state.getOneGameReducer.game,
      currentPlayerId: state.playerSigninReducer.currentPlayerId,
    }
  })

  const currentRound = rounds[round]

  const name = currentRound.name
  const place = currentRound.place
  const fruit = currentRound.fruit
  const color = currentRound.color
  const object = currentRound.object

  const getData = async () =>  await AsyncStorage.getItem('token')

  const handleNoSubmittedAnswers = () => {
    getData()
    .then((token)=> {
      socket.emit('answers_not_submitted', {name, place, fruit, color, object, token, gameId, round})
      navigation.navigate('results')
    })
  }
  
  useEffect(() => {
    dispatch(getGame(gameId))
  }, [])

  useEffect(() => {
    socket.emit('rejoined', gameId)
    socket.on('stop', ()=> setStop(true))
  }, [])
  
  

  

  useEffect(() => {
    if (stop) {
      handleNoSubmittedAnswers()
    }
    setStop(false)
  }, [stop, round])
    
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row>
              <Col><Image source={require("../assets/letter-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/name-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/city-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/fruit-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/color-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/object-removebg-preview.png")}></Image></Col>
              <Col></Col>
            </Row>
            {!!game && !!game.letters && game.letters.length > 0 
            && [0,1,2,3,4].map(r => (
            <Round key={r} 
            active={round === r} 
            round={r} gameId={gameId} 
            letters={game.letters} 
            />))}
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