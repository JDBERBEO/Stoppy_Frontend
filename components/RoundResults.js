import React, { useState, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Row, Col } from 'react-native-easy-grid'
import RNPickerSelect from 'react-native-picker-select'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export const RoundResults = ({player, round, updateScore}) => {
  const [scoreName, setScoreName] = useState('select score')
  const [scorePlace, setScorePlace] = useState('select score')
  const [scoreFruit, setScoreFruit] = useState('select score')
  const [scoreColor, setScoreColor] = useState('select score')
  const [scoreObject, setScoreObject] = useState('select score')

 
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

    return (
          <Row>
            <Col><Text style={styles.text}>{player.nameHeader[round]}</Text></Col>
              {
                player._id === currentPlayerId ? null : (
                  <Col><RNPickerSelect 
                  onValueChange={(value) => {
    
                    updateScore(player._id, 'name', value)                  
                    setScoreName(value)
                  }}
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
                  <Col><RNPickerSelect 
                  onValueChange={(value) => {
                    updateScore(player._id, 'place', value)
                    setScorePlace(value)
                  }}
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
                  <Col><RNPickerSelect 
                  onValueChange={(value) => {
                    updateScore(player._id, 'fruit', value)
                    setScoreFruit(value)
                  }}
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
                  <Col><RNPickerSelect 
                  onValueChange={(value) => {
                    updateScore(player._id, 'color', value)
                    setScoreColor(value)
                  }}
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
                  <Col><RNPickerSelect 
                  onValueChange={(value) => {
                    updateScore(player._id, 'object', value)
                    setScoreObject(value)
                  }}
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
    borderColor: "red",
    borderWidth: 1,
  },
});