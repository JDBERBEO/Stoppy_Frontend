import React, {useRef, useEffect, useState}from 'react'
import io from 'socket.io-client'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';




export const CreateGame = () => {
  const [nameOne, onChangeNameOne] = useState("")
  const [nameTwo, onChangeNameTwo] = useState("")
  const [nameThree, onChangeNameThree] = useState("")
  const [nameFour, onChangeNameFour] = useState("")
  const [nameFive, onChangeNameFive] = useState("")

  const [placeOne, onChangePlaceOne] = useState("")
  const [placeTwo, onChangePlaceTwo] = useState("")
  const [placeThree, onChangePlaceThree] = useState("")
  const [placeFour, onChangePlaceFour] = useState("")
  const [placeFive, onChangePlaceFive] = useState("")

  const [fruitOne, onChangeFruitOne] = useState("")
  const [fruitTwo, onChangeFruitTwo] = useState("")
  const [fruitThree, onChangeFruitThree] = useState("")
  const [fruitFour, onChangeFruitFour] = useState("")
  const [fruitFive, onChangeFruitFive] = useState("")

  const [colorOne, onChangeColorOne] = useState("")
  const [colorTwo, onChangeColorTwo] = useState("")
  const [colorThree, onChangeColorThree] = useState("")
  const [colorFour, onChangeColorFour] = useState("")
  const [colorFive, onChangeColorFive] = useState("")

  const [objectOne, onChangeObjectOne] = useState("")
  const [objectTwo, onChangeObjectTwo] = useState("")
  const [objectThree, onChangeObjectThree] = useState("")
  const [objectFour, onChangeObjectFour] = useState("")
  const [objectFive, onChangeObjectFive] = useState("")

    const ref = useRef()
    useEffect(() => {
    
    ref.current = io('http://localhost:8000')
    ref.current.on('welcome', data => console.log(data.message))
    }, [])

    const handleSubmitOne = () => {
      ref.current.emit('roundOne', {nameOne, placeOne, fruitOne, colorOne, objectOne })
    }

    const handleSubmitTwo = () => {
      ref.current.emit('roundTwo', {nameTwo, placeTwo, fruitTwo, colorTwo, objectTwo })
    }

    const handleSubmitThree = () => {
      ref.current.emit('roundThree', {nameThree, placeThree, fruitThree, colorThree, objectThree })
    }
    
    const handleSubmitFour = () => {
      ref.current.emit('roundFour', {nameFour, placeFour, fruitFour, colorFour, objectFour })
    }

    const handleSubmitFive = () => {
      ref.current.emit('roundFive', {nameFive, placeFive, fruitFive, colorFive, objectFive })
    }

    

    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row>
              <Col><Text style={styles.text}>Letter</Text></Col>
              <Col><Text style={styles.text}>Name</Text></Col>
              <Col><Text style={styles.text}>City/Country</Text></Col>
              <Col><Text style={styles.text}>Fruit</Text></Col>
              <Col><Text style={styles.text}>Color</Text></Col>
              <Col><Text style={styles.text}>Object</Text></Col>
              <Col><Text style={styles.text}>Score</Text></Col>
              <Col><Text style={styles.text}>Score</Text></Col>
            </Row>
            <Row>
            <Col><Text style={styles.text}>A</Text></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeNameOne(value)} value={nameOne}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangePlaceOne(value)} value={placeOne}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeFruitOne(value)} value={fruitOne}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeColorOne(value)} value={colorOne}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeObjectOne(value)} value={objectOne}/></Col>
              <Col><Text style={styles.text}>100</Text></Col>
              <Col><Button title="STOP" onPress={handleSubmitOne}></Button></Col>
            </Row>
            <Row>
            <Col><Text style={styles.text}>B</Text></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeNameTwo(value)} value={nameTwo}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangePlaceTwo(value)} value={placeTwo}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeFruitTwo(value)} value={fruitTwo}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeColorTwo(value)} value={colorTwo}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeObjectTwo(value)} value={objectTwo}/></Col>
              <Col><Text style={styles.text}>50</Text></Col>
              <Col><Button title="STOP" onPress={handleSubmitTwo}></Button></Col>
            </Row>
            <Row>
            <Col><Text style={styles.text}>C</Text></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeNameThree(value)} value={nameThree}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangePlaceThree(value)} value={placeThree}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeFruitThree(value)} value={fruitThree}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeColorThree(value)} value={colorThree}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeObjectThree(value)} value={objectThree}/></Col>
              <Col><Text style={styles.text}>0</Text></Col>
              <Col><Button title="STOP" onPress={handleSubmitThree}></Button></Col>
            </Row>
            <Row>
            <Col><Text style={styles.text}>D</Text></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeNameFour(value)} value={nameFour}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangePlaceFour(value)} value={placeFour}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeFruitFour(value)} value={fruitFour}/></Col>              
              <Col><TextInput style={styles.input} onChangeText={value => onChangeColorFour(value)} value={colorFour}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeObjectFour(value)} value={objectFour}/></Col>
              <Col><Text style={styles.text}>100</Text></Col>
              <Col><Button title="STOP" onPress={handleSubmitFour}></Button></Col>              
            </Row>
            <Row>
            <Col><Text style={styles.text}>E</Text></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeNameFive(value)} value={nameFive}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangePlaceFive(value)} value={placeFive}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeFruitFive(value)} value={fruitFive}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeColorFive(value)} value={colorFive}/></Col>
              <Col><TextInput style={styles.input} onChangeText={value => onChangeObjectFive(value)} value={objectFive}/></Col>
              <Col><Text style={styles.text}>100</Text></Col>
              <Col><Button title="STOP" onPress={handleSubmitFive}></Button></Col>
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
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});