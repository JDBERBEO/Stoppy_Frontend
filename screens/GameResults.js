import React, {useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import socket from './socket'
import RNPickerSelect from 'react-native-picker-select'
import { getGame } from '../store/getGameReducer'


export const GameResults = () => {
  const [scoreName, setScoreName] = useState('selecciona')
  const [scorePlace, setScorePlace] = useState('selecciona')
  const [scoreFruit, setScoreFruit] = useState('selecciona')
  const [scoreColor, setScoreColor] = useState('selecciona')
  const [scoreObject, setScoreObject] = useState('selecciona')
  // const [players, setPlayers] = useState([])
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

  const currentRound = rounds[round]
  console.log('currentRound', currentRound)
  // const score = currentRound.score
  
  // console.log('score', score)

  const handleReturn = function()  {
      const roundScore = scoreName + scorePlace + scoreFruit + scoreColor + scoreObject
      console.log('roundScore', roundScore)
      dispatch({type: "SUBMIT_ROUND_SCORE", payload: roundScore})
      dispatch({type: "NEXT_ROUND"})
      navigation.navigate('createGame')
  }

  // setTimeout(handleReturn, 15000 )


  const players = game.players
  // const playersNames = players[0].name

  // players.map({name} => {

  // } )

    // console.log('players', players)
   useEffect(() => {
    dispatch(getGame(gameId))
    // socket.on('send_answers', ({game}) =>{
    //   console.log('players del juego useEffects', game.players)
    //   setPlayers(game.players)
    // })
      // console.log('game id desde useeffect', gameId)
      // socket.emit('bring_all_answers', {gameId})
  }, [])
  
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <Row>
           
            {!!game.players && game.players.length>0 && game.players.map(({name, _id}) => {
              
            <Col key={_id}><Text>PLAYER NAME: {name}</Text></Col>
            })}

            <Col><Button title="Submit and go to next round" onPress={handleReturn}></Button></Col>
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
              <Col><RNPickerSelect onValueChange={(value) => setScoreName(value)}
                value={scoreName}
                items={[
                { label: '100', value: 100 },
                { label: '50', value: 50 },
                { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 2</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScorePlace(value)}
                value={scorePlace}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 3</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreFruit(value)}
                value={scoreFruit}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 4</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreColor(value)}
                value={scoreColor}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 5</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreObject(value)}
                value={scoreObject}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
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