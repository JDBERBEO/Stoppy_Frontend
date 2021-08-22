import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Row, Col } from 'react-native-easy-grid'
import RNPickerSelect from 'react-native-picker-select'
import { sendScore } from '../store/RoundReducer'
import { useSelector } from 'react-redux'

export const RoundResults = ({player, round}) => {
  const [scoreName, setScoreName] = useState(50)
  const [scorePlace, setScorePlace] = useState(50)
  const [scoreFruit, setScoreFruit] = useState(50)
  const [scoreColor, setScoreColor] = useState(50)
  const [scoreObject, setScoreObject] = useState()

  const { 
    currentPlayerId,
    // score
   } = useSelector(state => {
     console.log('state roundResults', state)
    return {
      currentPlayerId: state.playerSigninReducer.currentPlayerId,
    }
  })

  console.log('currenPlayerId: ', currentPlayerId )

  const handleReturn = function()  {
    const roundScore = scoreName + scorePlace + scoreFruit + scoreColor + scoreObject
    console.log('roundScore', roundScore)
    dispatch(sendScore(roundScore, playerId))
    dispatch({type: "NEXT_ROUND"})
    navigation.navigate('createGame')
}

  // setTimeout(handleReturn, 15000 )


    return (
          <Row>
            <Col><Text style={styles.text}>{player.nameHeader[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect placeholder={'selecciona'}
                  onValueChange={(value) => setScoreName(value)}
                  value={scoreName}
                  items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                  ]}/>
                </Col>
                )
              }
              <Col><Text style={styles.text}>Respuesta 2</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScorePlace(value)}
                value={scorePlace}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 3</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreFruit(value)}
                value={scoreFruit}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 4</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreColor(value)}
                value={scoreColor}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
              <Col><Text style={styles.text}>Respuesta 5</Text></Col>
              <Col><RNPickerSelect onValueChange={(value) => setScoreObject(value)}
                value={scoreObject}
                items={[
                  { label: '100', value: 100 },
                  { label: '50', value: 50 },
                  { label: '0', value: 0 },
                ]}/>
              </Col>
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