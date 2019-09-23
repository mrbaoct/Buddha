import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import SettingIcon from 'react-native-vector-icons/Feather'
import HandIcons from 'react-native-vector-icons/FontAwesome5'

import MyPrayers from '../MyPrayers'
import Subscribed from '../Subscribed'
import { colors } from '../../../utils';
import { default as styles} from './styled'

export default class Head extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isRenderSubscribed: false
    }
  }

  _onRenderAvatar() {
    return (
      <View style={styles.avatarWrapper}>
        <View style={styles.dumbAvatar}/>
        <View style={styles.settingIcon}>
          <SettingIcon
            name='settings'
            color={colors.whitePrimary}
            size={25}
          />
        </View>
        
      </View>
    )
  }

  _onRenderStreakCount() {
    return (
      <View style={styles.prayerWrapper}>
        <Text style={styles.prayerCount}>Liên tục</Text>
        <Text style={styles.prayerNum}>365</Text>
      </View>
    )
  }

  _onRenderWeekCount() {
    return (
      <View style={styles.prayerWrapper}>
         <Text style={styles.prayerCount}>Ngày thứ</Text>
        <Text style={styles.prayerNum}>365</Text>
      </View>
    )
  }

  _onRenderPrayActivities() {
    return (
      <View style={styles.prayActivityWrapper}>
        <TouchableOpacity style={styles.dumbActivity}>
          <HandIcons
            name='praying-hands'
            color={colors.whitePrimary}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dumbActivity}>
          <HandIcons
            name='khanda'
            color={colors.whitePrimary}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dumbActivity}>
          <HandIcons
            name='hands-helping'
            color={colors.whitePrimary}
            size={18}
          />
        </TouchableOpacity>
      </View>
    )
  }

  _onRenderHeader() {
    return (
      <View style={styles.headerWrapper}>

        {this._onRenderAvatar()}

        {this._onRenderStreakCount()}

        {this._onRenderWeekCount()}
        
        {this._onRenderPrayActivities()}
      </View>
    )
  }

  _onRenderTab() {
    const { isRenderSubscribed } = this.state
    return (
      <View style={styles.tabWrapper}>

        <TouchableOpacity
          onPress={() => this.setState({ isRenderSubscribed: false })}
          style={[
            styles.tab, {
              borderBottomWidth: !isRenderSubscribed ? 2.5 : 1,
              borderBottomColor: !isRenderSubscribed ? colors.bluePrimary : colors.grayPrimary,
            }
          ]}
        >
          <Text style={[
            styles.tabTxt, {
              color: !isRenderSubscribed ? colors.bluePrimary : colors.grayPrimary,
            }
          ]}>Lời cầu của tôi</Text>
        </TouchableOpacity>
      

        <TouchableOpacity
          onPress={() => this.setState({ isRenderSubscribed: true })}
          style={[
            styles.tab, {
              borderBottomWidth: isRenderSubscribed ? 2.5 : 1,
              borderBottomColor: isRenderSubscribed ? colors.bluePrimary : colors.grayPrimary,
            }
          ]}
        >
          <Text style={[
            styles.tabTxt, {
              color: isRenderSubscribed ? colors.bluePrimary : colors.grayPrimary,
            }
          ]}>Đã theo dõi</Text>
        </TouchableOpacity>
      </View>
    )
  }
  

  render() {
    const { isRenderSubscribed } = this.state
    return (
      <View style={styles.container}>

        {this._onRenderHeader()}


        {this._onRenderTab()}
        {!isRenderSubscribed ? <MyPrayers /> : <Subscribed />}
      </View>
    )
  }
}