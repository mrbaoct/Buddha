import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { colors } from '../../utils'

export default props => {
  const { children, onPress, btnStyle, txtStyle } = props

  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[styles.buttonWrapper, btnStyle]}
    >
      <Text style={[styles.text, txtStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whitePrimary,
    marginHorizontal: 35,
  },
  text: {
    fontSize: 18,
  }
})
