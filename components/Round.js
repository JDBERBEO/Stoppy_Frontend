import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Row, Col } from 'react-native-easy-grid';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import socket from '../screens/socket'

export const Round = ({ active, round, gameId}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { rounds } = useSelector(state => {
    return {
      rounds: state.roundReducer.rounds,
    }
  })

  const currentRound = rounds[round]
  const name = currentRound.name
  const place = currentRound.place
  const fruit = currentRound.fruit
  const color = currentRound.color
  const object = currentRound.object

  console.log('name desde currentRound', name)
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const randomCharacterOne = alphabet[Math.floor(Math.random() * alphabet.length)]

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
    console.log('gameId', gameId)
    console.log('name desde handleSubmi', name)
    socket.emit('round', {name, place, fruit, color, object, token, gameId, round})
    navigation.navigate('results')
  }
  
  // const handleNoSubmittedAnswers = async() => {
  //   const token = await getData()
  //   console.log('name desde Stop Event', name)
  //   socket.emit('answers_not_submitted', {name, place, fruit, color, object, token, gameId})
  // }

  // useEffect(() => {
    
  // }, [])



  return (
        <Row>
          <Col><Text style={styles.textAnswers}>{randomCharacterOne}</Text></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeName(value)} value={name} editable={active} /></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangePlace(value)} value={place} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeFruit(value)} value={fruit} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeColor(value)} value={color} editable={active}/></Col>
            <Col><TextInput style={styles.input} onChangeText={value => onChangeObject(value)} value={object} editable={active}/></Col>
            <Col><Text style={styles.textAnswers}>100</Text></Col>
            <Col>{active ? <Button title="STOP" onPress={handleSubmit}></Button> : null }</Col>
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
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});