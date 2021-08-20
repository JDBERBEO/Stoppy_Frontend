import React, {useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { ScorePicker } from '../components/ScorePicker'
import socket from './socket'


export const GameResults = () => {
  const [players, setPlayers] = useState([])
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { 
    round, 
    gameId, 
    rounds
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds
    }
  })
  

  const handleReturn = function()  {
      dispatch({type: "NEXT_ROUND"})
      navigation.navigate('createGame')
  }

  // setTimeout(handleReturn, 15000 )
  const playersString = players.map((player) => {
    player.toString()
  })

  console.log('players esde geamresults: ', players)
  useEffect(() => {
      socket.emit('bring_all_answers', {gameId})
      socket.on('send_answers', ({game}) =>{
        console.log('players del juego', game.players)
        // setPlayers(game.players)
      })
  }, [])
  
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <Row>
           
            {playersString.map((player) => {
              <Text>{player}</Text>
            })}
            <Col><Text>PLAYER NAME: player</Text></Col>

            <Col><Button title="NextRound" onPress={handleReturn}></Button></Col>
            </Row>
            <Row>
              <Col><Text style={styles.text}>Name</Text></Col>
              <Col><Text>Score</Text></Col>
              <Col><Text style={styles.text}>City/Country</Text></Col>
              <Col><Text>Score</Text></Col>
              <Col><Text style={styles.text}>Fruit</Text></Col>
              <Col><Text>Score</Text></Col>
              <Col><Text style={styles.text}>Color</Text></Col>
              <Col><Text>Score</Text></Col>
              <Col><Text style={styles.text}>Object</Text></Col>
              <Col><Text>Score</Text></Col>
            </Row>
            <Row>
            <Col><Text style={styles.text}>Respuesta 1</Text></Col>
              <Col><ScorePicker /></Col>
              <Col><Text style={styles.text}>Respuesta 2</Text></Col>
              <Col><ScorePicker /></Col>
              <Col><Text style={styles.text}>Respuesta 3</Text></Col>
              <Col><ScorePicker /></Col>
              <Col><Text style={styles.text}>Respuesta 4</Text></Col>
              <Col><ScorePicker /></Col>
              <Col><Text style={styles.text}>Respuesta 5</Text></Col>
              <Col><ScorePicker /></Col>
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
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20%",
    marginTop: "-10%"
  },
  text:{
    textAlign:"center",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});