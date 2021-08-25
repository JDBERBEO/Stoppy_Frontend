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
  const [seconds, setSeconds] = useState(30);

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

  // console.log('game desde Gamersults: ', game)
  
  const handleReturn = async function()  {
    
    for (const playerId in playersScores){

      if (playerId !== currentPlayerId) {

        const player = playersScores[playerId]
   
        const roundScore = player.name + player.place + player.fruit + player.color + player.object

        const { data } = await axios ({
          method: 'POST',
          baseURL: 'http://localhost:8000',
          url:'/games/score/roundScore',
          data: { roundScore, playerIdBeingScored : playerId, round, gameId}
        })
        }
      }
    
    if (round === 4) {
      navigation.navigate('finalResults')
    }else{
        
        dispatch({type: 'NEXT_ROUND'})

      navigation.navigate('createGame')
    }

} 

    const updateScore = (playerId, name, value) => {
     const score = playersScores[playerId]
     score[name] = value 
     setPlayersScores({...playersScores, [playerId]:score})
    }
    
    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
    });

   useEffect(() => {
    const listener = ({game}) =>{
      setPlayers(game.players)
      const scores = {}
      game.players.forEach(player => {
        scores[player._id] = {name: 50, place: 50, fruit: 50, color: 50, object: 50}
      });
      setPlayersScores(scores)
    }
    const listenerTwo = (data)=>{
      console.log('recibí scores desde gameResults: ', data)
    
        dispatch({type: 'ACTUALIZAR_SCORE', payload: data})
      
    }
    socket.on('send_answers', listener )
    socket.on('scores', listenerTwo)
    return () => {
      socket.off('scores', listenerTwo)
      socket.off("send_answers", listener);
    }
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      setTimeoutState(true)
    }, 30000 )
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
          <Row>
            <Col>
            <Image source={require("../assets/roundResults-removebg-preview.png")} style={styles.imageLogo} resizeMode="contain" ></Image>
            </Col>
            <Col>
            <Text  style={styles.textTimer}>
            timer: {seconds}
            </Text>
            </Col>
          </Row>
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
  },
  text:{
    textAlign:"center",
    alignItems: "center",
    justifyContent: "center",
  },
  textTimer: {
    textAlign:"center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});