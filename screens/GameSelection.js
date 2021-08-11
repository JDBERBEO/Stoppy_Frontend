import React from 'react'
import { View, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export const GameSelection = () => {
  const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
            {/* <Image source={require("../assets/chooseOneOption.png")} style={styles.imageLogo} resizeMode="contain" /> */}
            <Button title="Create Game" onPress={()=> navigation.navigate('createGame')}/>
            <Button title="Join Game" onPress={()=> navigation.navigate('joinGame')}/>
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
      justifyContent:"center",
      alignItems:"center"
    },
    imageLogo: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    text:{
      textAlign:"center",
      alignItems: "flex-start",
    },
    input: {

      borderBottomColor: "blue",
      borderBottomWidth: 1,
      borderWidth: 0,
      padding: 10,
      marginBottom: "5%"
    },
  })