import React, { Component } from "react";
import {
    StyleSheet, View, Text,
    TouchableOpacity,
    ImageBackground,
    Keyboard
} from "react-native";

//import firebase, { Firebase } from "react-native-firebase";
import {AsyncStorage} from "@react-native-community/async-storage";
import { colors, storageKey } from "../../../utils";
import { Input, Button } from "../../../components";

//const auth = firebase.auth()

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            loginError: null,
            isShowModal: false,
        }
    }

    // _loginWithEmailPassword = async () => {
    //     const {email, password} = this.setState
    //     try {
    //         const user = await auth.signInWithEmailAndPassword(email, password)
    //         if (user) {
    //             const token = await auth.currentUser.getIdToken()
    //             if (token) {
    //                 await AsyncStorage.setItem(storageKey.token, JSON.stringify(token))
    //                 await AsyncStorage.setItem(storageKey.userInfo, JSON.stringify(user))
    //                 this.props.navigation.navigate('main')
    //             }
    //         }
    //     } catch (error) {
    //         console.log('LOGIN ERR', error.code)
    //         this.setState({loginErr: error})
    //     }
    // }


    render() {
        return (
            <ImageBackground
                source={require('../../../assets/images/login-bg.jpg')}
                style={styles.bgStyle}
            >
                <View style={styles.loginContainer}>
                    <View style={styles.loginWrapper}>
                        <Text style={styles.loginLogo}>
                            BUDDHA
                        </Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            placeholder='Email'
                            onChange={email => this.setState({ email })}
                        />
                        <Input
                            placeholder='Password'
                            onChange={password => this.setState({ password })}
                            customStyle={{ marginTop: 10, marginBottom: 40 }}
                            secureTextEntry
                        />
                        <Button
                            onPress={() => this._loginWithEmailPassword}
                        >Login</Button>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Reset')}>
                            <Text style={styles.forgetTxt}
                            >Quên mật khẩu ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.registerTxt}>
                                Chưa có tài khoản? Đăng ký ngay.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

styles = StyleSheet.create({
    bgStyle: {
        flex: 1
    },
    loginContainer: {
        flex: 1,
        backgroundColor: colors.darkTransPrimary,
        alignItems: "center",
        paddingTop: 50
    },
    loginWrapper: {
        width: "100%",
        alignItems: "center",
        paddingTop: 30
    },
    inputWrapper: {
        width: "85%",
        marginTop: 50
    },
    loginLogo: {
        fontSize: 60,
        fontWeight: "500",
        color: colors.blueSecondary,
        textTransform: "uppercase",
        letterSpacing: 10
    },
    forgetWrapper: {
        width: '65%',
        marginTop: 10,
    },
    forgetTxt: {
        color: colors.whitePrimary,
        textAlign: 'right',
        fontSize: 15,
        marginTop: 15
    },
    registerWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    registerTxt: {
        color: colors.whitePrimary,
        marginRight: 10,
        alignSelf: "center",
        marginTop: 30
    }
})