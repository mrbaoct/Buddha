import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../../utils';


export default props => {
  const { onChange, customStyle } = props

  const handleOnChange = e => {
    onChange(e)
  }

  return (
    <TextInput
      {...props}
      underlineColorAndroid={'transparent'}
      style={[styles.textInput, customStyle]}
      onChangeText={handleOnChange}
      placeholderTextColor={colors.whiteTransPrimary}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderStyle: 'solid',
    borderBottomColor: colors.whiteTransPrimary,
    borderBottomWidth: 1,
    color: colors.blueSecondary,
    fontSize: 20,
  },
})
