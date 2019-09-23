import { createAppContainer } from "react-navigation"

import { createStackNavigator } from "react-navigation-stack"

import  HeadScreen from "./Head";
import InviteFriendScreen from "./InviteFriend";
import MyPrayersScreen from "./MyPrayers";
import PrayHistoryScreen from "./PrayHistory";
import PrayWithYoyScreen from "./PrayWithYoy";
import SubscribedScreen from "./Subscribed";

const MainNavigation = createStackNavigator({
    head: HeadScreen,
    inviteFriend: InviteFriendScreen,
    myPrayers: MyPrayersScreen,
    prayHistory: PrayHistoryScreen,
    prayWithYoy: PrayWithYoyScreen,
    subscribed: SubscribedScreen
}, {
    initialRouteName: 'head'
})

export default createAppContainer(MainNavigation)