import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import socket from '../screens/socket'


export const Round = ({ 
  active, 
  round, 
  gameId, 
  letters, 
  playerScores
}) => {
  // const [randomLetter, setRandomLetter] = useState('?')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { 
    rounds,
    game,
    currentPlayerId
   } = useSelector(state => {
    return {
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

  const onChangeName = (value) => {
    dispatch({ type: "FILL_ANSWER", payload: {name: "name" , value}})
  }

  const onChangePlace = (value) => {
    dispatch({ type: "FILL_ANSWER", payload: {name: "place" , value}})
  }

  const onChangeFruit = (value) => {
    dispatch({ type: "FILL_ANSWER", payload: {name: "fruit" , value}})
  }

  const onChangeColor = (value) => {
    dispatch({ type: "FILL_ANSWER", payload: {name: "color" , value}})
  }

  const onChangeObject = (value) => {
    dispatch({ type: "FILL_ANSWER", payload: {name: "object" , value}})
  }

  const getData = async () =>  await AsyncStorage.getItem('token')

  const handleSubmit = async() => {
    const token = await getData()
    socket.emit('round', {name, place, fruit, color, object, token, gameId, round})
    navigation.navigate('results')
  }

  return (
        <Row>
          <Col>{active ? <Text style={styles.letter}>{letters[round]}</Text> : <Text style={styles.textAnswers}></Text>}</Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeName(value)} value={name} editable={active} /></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangePlace(value)} value={place} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeFruit(value)} value={fruit} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeColor(value)} value={color} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeObject(value)} value={object} editable={active}/></Col>
            <Col><Text style={styles.textAnswers}>
              </Text></Col>
            <Col>{active ? <TouchableOpacity onPress={handleSubmit} ><Image source={require("../assets/stopFinal.png")} /></TouchableOpacity> : null }</Col>
        </Row>
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
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    marginLeft: "0%",
    // marginTop: "-10%"
  },
  text:{
    textAlign:"center",
    fontSize: 32
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  textAnswers:{
    textAlign:"center",
    fontSize: 14
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  letter: {
    textAlign:"center",
    fontSize: 32
  },
  input: {
 
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: "10%"
  },
});