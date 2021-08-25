import React, {useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native'
import { getGame } from '../store/getGameReducer'
import {useDispatch, useSelector } from 'react-redux'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { useNavigation } from '@react-navigation/native'

export const FinalGameResults = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { 
    round, 
    gameId, 
    rounds,
    game,
    loading
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      rounds: state.roundReducer.rounds,
      game: state.getOneGameReducer.game,
      loading: state.getOneGameReducer.loading
    }
  })

  const players = game.players
  console.log('player desde FinalgAME results', players)
  const playersFinalScores = players.map((player) => ({
    id: player._id,
    name:player.name,
    ScorePerRound:player.ScorePerRound
  }))


    console.log('PlayersFinalScores', playersFinalScores)
  const playersSumAllScores = playersFinalScores.map((player) => ({
    id: player._id,
    name:player.name,
    finalScore: player.ScorePerRound.reduce((a, b) => a + b)
  }
  ))
  console.log('playersSumAllScores', playersSumAllScores)

  useEffect(() => {
    console.log('gameid desde FinalResults: ', gameId)
    dispatch(getGame(gameId))
    console.log('game desde FinalResults', game.letters)
  }, [])


  if (loading) return <Text>loading...</Text> 

    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
        <Image source={require("../assets/finalScores.png")} />
          <Grid>
            {!!playersSumAllScores && playersSumAllScores.length > 0 && playersSumAllScores.map((player) => (

              <Row key={player.id}><Text>Player: {player.name}, Total Score : {player.finalScore}</Text></Row>
            ))}
          </Grid>
          <TouchableOpacity onPress={()=> navigation.navigate('gameSelection')} style={styles.signin}><Image source={require("../assets/goToGameSelection.png")} /></TouchableOpacity>
          {/* <Button title="Go to game selection" onPress={()=> navigation.navigate('gameSelection')}/> */}
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
      textAlign:"center"
    },
    input: {
      height: 40,
      marginHorizontal: 120,
      borderBottomColor: "blue",
      borderBottomWidth: 1,
      borderWidth: 0,
      padding: 10,
    },
  });