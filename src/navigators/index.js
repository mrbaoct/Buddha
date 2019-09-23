import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'


import AuthLoadingScreen from '../views/AuthLoading'

import AuthStack from '../views/Authentication'

import MainStack from '../views/Main'

const AppNavigation = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
  Main: MainStack
}, {
  initialRouteName: 'AuthLoading',
})

export default createAppContainer(AppNavigation)