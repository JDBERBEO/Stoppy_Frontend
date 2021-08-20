
import React from 'react'
import RNPickerSelect from 'react-native-picker-select'

export const ScorePicker = () => {


    return (
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
                { label: '100', value: '100' },
                { label: '50', value: '50' },
                { label: '0', value: '0' },
            ]}
        />
    )
}
