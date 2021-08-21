
import React, {useState} from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { useSelector } from 'react-redux'

export const ScorePicker = () => {

    const [answerScore, setAnswerScore] = useState(score)
    const {round, score, rounds } = useSelector(state => {
      return {
        round: state.roundReducer.round,
        rounds: state.roundReducer.rounds, 
        score: state.roundReducer.score
      }
    })
    
    const onChangeScore = (value) => {
      dispatch({ type: "CHANGE_SCORE", payload: {score: "name" , value}})
    }

    

    console.log('answerScore', answerScore)
    return (
        <RNPickerSelect
          onValueChange={(value) => setAnswerScore(answerScore + value)}
          items={[
                { label: '100', value: '100' },
                { label: '50', value: '50' },
                { label: '0', value: '0' },
            ]}
        />
    )
}
