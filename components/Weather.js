import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';

class Weather extends Component {
    render(){
        return (
            <LinearGradient
                colors={["rgb(247,202,201)","rgb(146,168,209)"]}
                style={styles.container}>
                <View style= {styles.upper}>
                    <Text>Weather Icon</Text>
                </View>
                <View style= {styles.lower}>
                    <Text style={styles.title}>Good Weather app</Text>
                    <Text style={styles.subtitle}>For more info get out</Text>
                </View>
            </LinearGradient>  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    upper:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:25,
    },
    title:{
        fontSize:30,
        backgroundColor:"transparent",
        color:"white",
        //marginBottom:10,
        fontWeight:'300'
    },
    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        //marginBottom:10,
        fontWeight:'300'
    },
});

export default Weather;