import React, {useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import socket from './socket'
import RNPickerSelect from 'react-native-picker-select'
import { getGame } from '../store/getGameReducer'
import { GameResultsHeaders } from '../components/GameResultsHeaders'
import { RoundResults } from '../components/RoundResults'


export const GameResults = () => {
  
  const [players, setPlayers] = useState([])
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { 
    round, 
    gameId, 
    rounds,
    game,
    // score
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds,
      game: state.getOneGameReducer.game,
      score: state.roundReducer.score
    }
  })
  
  // console.log('score', score)

  // const players = game.players
  // const playersNames = players[0].name

  // players.map({name} => {

  // } )

    console.log('players', players)
   useEffect(() => {
    // dispatch(getGame(gameId))
    
    socket.on('send_answers', ({game}) =>{
      console.log('players del juego useEffects', game.players)
      setPlayers(game.players)
    })
      // console.log('game id desde useeffect', gameId)
      // socket.emit('bring_all_answers', {gameId})
  }, [])
  
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <GameResultsHeaders />
            {!!players && players.length>0 && players.map((player)=> (
              <RoundResults key={player._id} 
              player={player}
              round={round}
              />
            ))}
            
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