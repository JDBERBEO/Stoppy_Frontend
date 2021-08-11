import React, {useRef, useEffect, useState}from 'react'
import io from 'socket.io-client'
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export const CreateGame = () => {
    const [name, setName] = useState('')
    const ref = useRef()
    const headTable = ['letter', 'Name', 'City/Country', 'Fruit','Color', 'Thing']
    useEffect(() => {
    
    ref.current = io('http://localhost:8000')
    ref.current.on('welcome', data => console.log(data.message))
    }, [])

    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          {/* <Image source={require("../assets/Signin_NoBK.png")} style={styles.imageLogo} resizeMode="contain" />
          <Button title="Submit" onPress={handleSubmit} /> */}
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', margin: '5%'}}>
        <Row data={headTable} style={styles.head} textStyle={styles.text}/>
        <Row data={headTable} style={styles.head} textStyle={styles.text}/>
        </Table>
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