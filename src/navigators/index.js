import {
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";

import AuthLoadingScreen from "../views/AuthLoading";

import AuthStack from "../views/Authentication";

import MainStack from "../views/Main";

const AppNavigation = createSwitchNavigator({
    authLoading: AuthLoadingScreen,
    auth: AuthStack,
    main: MainStack
}, {
    initialRouteName: 'authLoading'
})

export default createAppContainer(AppNavigation)