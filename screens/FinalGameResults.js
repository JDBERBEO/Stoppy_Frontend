import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export const FinalGameResults = () => {
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
          <Image source={require("../assets/Stoppy_big_Logo-NoBk.png")} style={styles.imageLogo} resizeMode="contain" />
          <Text style={styles.text}>FINAL RESULTS</Text>
          <Button title="Go to game selection" onPress={()=> navigation.navigate('signup')}/>
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