import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { storageKey } from '../../utils'

export default class AuthLoading extends Component {
  

  async componentDidMount() {
    const { navigation } = this.props

    const tokenStorage = await AsyncStorage.getItem(storageKey.token)

    if (tokenStorage && tokenStorage !== null) {

      navigation.navigate('main')
    } else {

      navigation.navigate('auth')
    }
  };
  

  render() {
    return (
      <View>
        <Text>
          AuthLoading
        </Text>
      </View>
    )
  }
}