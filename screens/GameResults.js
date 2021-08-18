import React, {useState} from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Picker} from '@react-native-picker/picker'
import RNPickerSelect from 'react-native-picker-select'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


export const GameResults = () => {
  const dispatch = useDispatch()
  const [Enable , setEnable]  = useState("courses")
  const navigation = useNavigation()

  const handleReturn = () => {
        dispatch({type: "NEXT_ROUND"})
        navigation.navigate('createGame')
  }
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Grid>
            <Row><Text>ROUNDRESULTS!!</Text></Row>
            <Row><Text>PLAYER NAME</Text></Row>
            <Row>
              <Col><Text style={styles.text}>Name</Text></Col>
              <Col>
         <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '100', value: '100' },
                { label: '50', value: '50' },
                { label: '0', value: '0' },
            ]}
        />
        </Col>
              <Col><Text style={styles.text}>City/Country</Text></Col>
              <Col><Text style={styles.text}>Score</Text></Col>
              <Col><Text style={styles.text}>Fruit</Text></Col>
              <Col><Text style={styles.text}>Score</Text></Col>
              <Col><Text style={styles.text}>Color</Text></Col>
              <Col><Text style={styles.text}>Score</Text></Col>
              <Col><Text style={styles.text}>Object</Text></Col>
              <Col><Button title="NextRound" onPress={handleReturn}></Button></Col>
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