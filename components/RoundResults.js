import React, { useState, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Row, Col } from 'react-native-easy-grid'
import RNPickerSelect from 'react-native-picker-select'
import { sendScore } from '../store/RoundReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export const RoundResults = ({player, round, updateScore}) => {
  const [scoreName, setScoreName] = useState(50)
  const [scorePlace, setScorePlace] = useState(50)
  const [scoreFruit, setScoreFruit] = useState(50)
  const [scoreColor, setScoreColor] = useState(50)
  const [scoreObject, setScoreObject] = useState(50)

  const [timeout, setTimeoutState] = useState(false)
  const navigation = useNavigation()

  const dispatch = useDispatch()
  
  const { 
    currentPlayerId,
    // score
   } = useSelector(state => {

    return {
      currentPlayerId: state.playerSigninReducer.currentPlayerId,
    }
  })

  console.log('currenPlayerId: ', currentPlayerId )

  const handleReturn = function()  {
    const roundScore = scoreName + scorePlace + scoreFruit + scoreColor + scoreObject
    console.log('roundScore', roundScore)
    dispatch(sendScore(roundScore, player._id, round))
    

    if (round === 4) {
      navigation.navigate('finalResults')
    }else{

      navigation.navigate('createGame')
    }

} 

  useEffect(() => {
    setTimeout(()=>{
      setTimeoutState(true)
    }, 30000 )
  }, [])

  useEffect(() => {
    if(timeout) {
      handleReturn()
    }
    setTimeoutState(false)
  }, [timeout])

    return (
          <Row>
            <Col><Text style={styles.text}>{player.nameHeader[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => {
                    console.log('pickerNameValue: ', value)
                    updateScore(player._id, 'name', value)}}
                  value={scoreName}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
              <Col><Text style={styles.text}>{player.place[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => setScorePlace(value)}
                  value={scorePlace}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
              <Col><Text style={styles.text}>{player.fruit[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => setScoreFruit(value)}
                  value={scoreFruit}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
              <Col><Text style={styles.text}>{player.color[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => setScoreColor(value)}
                  value={scoreColor}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
              <Col><Text style={styles.text}>{player.object[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => setScoreObject(value)}
                  value={scoreObject}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
          </Row>
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
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
 
    borderColor: "red",
    borderWidth: 1,
  },
});