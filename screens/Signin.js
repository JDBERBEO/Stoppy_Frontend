import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Button} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { playerSignin } from '../store/playerSigninReducer';
import { useNavigation } from '@react-navigation/native';

export const Signin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")

  const {signinFormLoading, signinFormError} = useSelector (
    ({playerSigninReducer}) => {
      return {
        signinFormLoading: playerSigninReducer.signinFormLoading,
        signinFormError: playerSigninReducer.signinFormError
      }
    }
  )
  const handleSubmit = () => {
    dispatch(playerSignin( email, password, navigation))
  }

  if (signinFormLoading) return <Text>loading...</Text>
  if (signinFormError) return <Text>Oops something went wrong...</Text>

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
            <Image source={require("../assets/Signin_NoBK.png")} style={styles.imageLogo} resizeMode="contain" />
            <Text style={styles.text}>Email: </Text>
            <TextInput style={styles.input} onChangeText={value => onChangeEmail(value)} value={email}/>
            <Text style={styles.text}>Password: </Text>
            <TextInput style={styles.input} onChangeText={value => onChangePassword(value)} value={password}/>
            <Button
              title="Submit"
              onPress={handleSubmit}
            />
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