import React, { useEffect }from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import socket from './socket'
import { useNavigation } from '@react-navigation/native'
import { Round } from '../components/Round';
import { useSelector } from 'react-redux'


export const CreateGame = () => {

  const navigation = useNavigation()

  const { 
    round, 
    gameId, 
    // rounds
   } = useSelector(state => {
    return {
      round: state.roundReducer.round,
      gameId: state.roundReducer.gameId,
      // rounds: state.roundReducer.rounds
    }
  })


  // const currentRound = rounds[round]
  // console.log('currentRound', currentRound)
  // const name = currentRound.name
  // const place = currentRound.place
  // const fruit = currentRound.fruit
  // const color = currentRound.color
  // const object = currentRound.object

  useEffect(() => {
    socket.emit('rejoined', gameId)
    
    socket.on('joined',()=>{
      console.log('alguien se unió')
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