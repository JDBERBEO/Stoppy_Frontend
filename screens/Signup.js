import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { playerSignup } from '../store/playerReducer';
import { useNavigation } from '@react-navigation/native';

export const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const [name, onChangeName] = useState("")
  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")

  const {signupFormLoading, signupFormError} = useSelector (
    ({playerReducer}) => {
      return {
        signupFormLoading: playerReducer.signupFormLoading,
        signupFormError: playerReducer.signupFormError
      }
    }
  )
  const handleSubmit = () => {
    dispatch(playerSignup(name, email, password, navigation))
  }

  if (signupFormLoading) return <Text>loading...</Text>
  // if (signupFormError) return <Text>Oops something went wrong...</Text>

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/paper1.jpeg")} resizeMode="cover" style={styles.image}>
            <Image source={require("../assets/FinalRegisterNoBack.png")} style={styles.imageLogo} resizeMode="contain" />
            <Text style={styles.text}>StoppieName: </Text>
            <TextInput style={styles.input} onChangeText={value => onChangeName(value)} value={name}/>
            <Text style={styles.text}>Email: </Text>
            {!!signupFormError && <Text style={styles.errorText}>Email o password invalid, Password should have at least 8 characters, one upper case, three numeric </Text>}
            <TextInput style={styles.input} onChangeText={value => onChangeEmail(value)} value={email}/>
            <Text style={styles.text}>Password: </Text>
            <TextInput style={styles.input} onChangeText={value => onChangePassword(value)} value={password} secureTextEntry={true} />
            <TouchableOpacity onPress={handleSubmit} style={styles.submit}><Image source={require("../assets/submitFinal.png")} /></TouchableOpacity>
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
    errorText:{
      color: "red"
    },
    input: {

      borderBottomColor: "blue",
      borderBottomWidth: 1,
      borderWidth: 0,
      padding: 10,
      marginBottom: "5%"
    },
    submit:{
      marginBottom: "5%"
    }
  })