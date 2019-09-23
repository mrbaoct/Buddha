import  React from "react"
import { View, StatusBar, StyleSheet } from "react-native";
import { Spinner } from "react-native-loading-spinner-overlay";

const wrapper = ({child, isLoading = false, customStyle}) => {
    <View style = {[styles.container, customStyle]}>
        <StatusBar/>
        {child}
        <Spinner visible = {isLoading}/>
    </View>
}

styles = StyleSheet.create({
    container: 1
})

export default wrapper