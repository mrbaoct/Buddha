import {
  createAppContainer
} from 'react-navigation'

import { createStackNavigator } from "react-navigation-stack";

import HeadScreen from './Head'
import InviteScreen from './InviteFriend'
import MyPrayScreen from './MyPrayers'
import PrayHistoryScreen from './PrayHistory'
import PrayWithYouScreen from './PrayWithYou'
import SubscribedScreen from './Subscribed'

const MainNavigation = createStackNavigator({
  head: HeadScreen,
  invite: InviteScreen,
  myPray: MyPrayScreen,
  prayHistory: PrayHistoryScreen,
  prayWithYou: PrayWithYouScreen,
  subscribed: SubscribedScreen
}, {
  initialRouteName: 'head',
  headerMode: 'none'
})

export default createAppContainer(MainNavigation)