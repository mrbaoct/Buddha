import { createAppContainer } from "react-navigation"

import { createStackNavigator } from "react-navigation-stack"

import LoginScreen from "./Login";

import RegisterScreen from "./Register";

import ResetScreen from "./Reset";

const AuthNavigation = createStackNavigator({
    login: LoginScreen,
    register: RegisterScreen,
    reset: ResetScreen
}, {
    initialRouteName: 'login',
    headerMode: "none"
}
)

export default createAppContainer(AuthNavigation);