import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigation from "./src/navigators";

export default class App extends Component {
    render() {
        console.log('hi')
        return (
            <View style={styles.container}>
                <AppNavigation />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
