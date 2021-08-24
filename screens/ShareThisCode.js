import React from 'react'
import { Grid, Row } from 'react-native-easy-grid'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import socket from './socket'

export const ShareThisCode = () => {
  const navigation = useNavigation()

  const handleSubmit = async() => {
    socket.emit('startgame', {gameId})
    socket.on('startingGame', () => {
      navigation.navigate('createGame')
    })
  }


    return (
        <Grid>
            <Row>
                <Image source={require("../assets/share_this_code.png")} style={styles.imageLogo} resizeMode="contain" ></Image> 
            </Row>  
            <Row>
                <Text selectable={true} style={styles.text}>{gameId}</Text> 
            </Row>
            <Row>
                <Button title='Start Game' onPress={handleSubmit}></Button>
            </Row>
        </Grid>
    )
}
