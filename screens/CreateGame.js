import React, { useRef, useEffect, useState}from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import socket from './socket'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Round } from '../components/Round';
import { useSelector, useDispatch } from 'react-redux'


export const CreateGame = ({route}) => {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const { gameId } = route.params;

  const { round } = useSelector(state => {
    return {
      round: state.roundReducer.round,
    }
  })

  // const [nameOne, onChangeNameOne] = useState("")
  // const [nameTwo, onChangeNameTwo] = useState("")
  // const [nameThree, onChangeNameThree] = useState("")
  // const [nameFour, onChangeNameFour] = useState("")
  // const [nameFive, onChangeNameFive] = useState("")

  // const [placeOne, onChangePlaceOne] = useState("")
  // const [placeTwo, onChangePlaceTwo] = useState("")
  // const [placeThree, onChangePlaceThree] = useState("")
  // const [placeFour, onChangePlaceFour] = useState("")
  // const [placeFive, onChangePlaceFive] = useState("")

  // const [fruitOne, onChangeFruitOne] = useState("")
  // const [fruitTwo, onChangeFruitTwo] = useState("")
  // const [fruitThree, onChangeFruitThree] = useState("")
  // const [fruitFour, onChangeFruitFour] = useState("")
  // const [fruitFive, onChangeFruitFive] = useState("")

  // const [colorOne, onChangeColorOne] = useState("")
  // const [colorTwo, onChangeColorTwo] = useState("")
  // const [colorThree, onChangeColorThree] = useState("")
  // const [colorFour, onChangeColorFour] = useState("")
  // const [colorFive, onChangeColorFive] = useState("")

  // const [objectOne, onChangeObjectOne] = useState("")
  // const [objectTwo, onChangeObjectTwo] = useState("")
  // const [objectThree, onChangeObjectThree] = useState("")
  // const [objectFour, onChangeObjectFour] = useState("")
  // const [objectFive, onChangeObjectFive] = useState("")

  // const alphabet = "abcdefghijklmnopqrstuvwxyz"

  // const randomCharacterOne = alphabet[Math.floor(Math.random() * alphabet.length)]

  // const randomCharacterTwo = alphabet[Math.floor(Math.random() * alphabet.length)]

  // const randomCharacterThree = alphabet[Math.floor(Math.random() * alphabet.length)]

  // const randomCharacterFour = alphabet[Math.floor(Math.random() * alphabet.length)]

  // const randomCharacterFive = alphabet[Math.floor(Math.random() * alphabet.length)]


 
  
  

  useEffect(() => {
    socket.emit('rejoined', gameId)

    socket.on('joined',()=>{
      console.log('alguien se unió')
    })
    socket.on('stop', () => {
      navigation.navigate('results')
    })
  }, [])
    
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Image source={require("../assets/share_this_code.png")} style={styles.imageLogo} resizeMode="contain" ></Image> 
            <Text selectable={true} style={styles.text}>{gameId}</Text></Row>     
            <Row>
              <Col><Image source={require("../assets/letter-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/name-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/city-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/fruit-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/color-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/object-removebg-preview.png")}></Image></Col>
              <Col><Image source={require("../assets/score-removebg-preview.png")}></Image></Col>
              <Col></Col>
            </Row>
            {[0,1,2,3,4].map(r => <Round active={round === r} round={r} gameId={gameId}/>)}
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