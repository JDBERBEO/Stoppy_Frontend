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
import axios from 'axios'


export const GameResults = () => {
  
  const [playersScores, setPlayersScores] = useState({})
  const [players, setPlayers] = useState([])
  const [timeout, setTimeoutState] = useState(false)

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const { 
    round, 
    gameId, 
    rounds,
    game,
    currentPlayerId
    // score
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds,
      game: state.getOneGameReducer.game,
      score: state.roundReducer.score,
      currentPlayerId: state.playerSigninReducer.currentPlayerId,
    }
  })
  
  const handleReturn = async function()  {
    
    for (const playerId in playersScores){

      if (playerId !== currentPlayerId) {

        const player = playersScores[playerId]
   
        const roundScore = player.name + player.place + player.fruit + player.color + player.object

        const { data } = await axios ({
          method: 'POST',
          baseURL: 'http://localhost:8000',
          url:'/games/score/roundScore',
          data: { roundScore, playerIdBeingScored : playerId, round}
        })
        }
      }
      
      dispatch({type: 'NEXT_ROUND'})

    if (round === 4) {
      navigation.navigate('finalResults')
    }else{

      navigation.navigate('createGame')
    }

} 

    const updateScore = (playerId, name, value) => {
     const score = playersScores[playerId]
     score[name] = value 
     setPlayersScores({...playersScores, [playerId]:score})
    }
   
   useEffect(() => {
    socket.on('send_answers', ({game}) =>{
      setPlayers(game.players)
      const scores = {}
      game.players.forEach(player => {
        scores[player._id] = {name: 50, place: 50, fruit: 50, color: 50, object: 50}
      });
      setPlayersScores(scores)
    })
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      setTimeoutState(true)
    }, 3000 )
  }, [])

  useEffect(() => {
    if(timeout) {
      handleReturn()
    }
    setTimeoutState(false)
  }, [timeout])
  
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <GameResultsHeaders />
            {!!players && players.length>0 && players.map((player)=> (
              <RoundResults key={player._id} 
              player={player}
              round={round}
              updateScore={updateScore}
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