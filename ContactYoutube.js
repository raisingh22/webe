import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ContactYoutube = ({navigation}) => {
    const [userName, setUserName] = useState("");

    const [password, setPassword] = useState("");
    console.log(userName, password);
    const submit = () => {
      
        if (userName === "raisingh229@gmail.com" && password === "harjinder") {
           
            navigation.navigate("Home", {myName: `${userName}`});
      if (!userName && !password) {
            return Alert.alert('Error', 'Email  and Password is required');
        }
        if (!validateEmail(userName)) {
            return Alert.alert('Error', 'Invalid email');
        }
        if (password.length === 0) {
            return Alert.alert('Error', 'Password is empty');
        }
         if (password.length < 6) {
            return Alert.alert('Error', 'Password must be at least 6 characters');
            }
            // if (userName === "raisingh229@gmail.com" || password.length === 0) {
            //     return Alert.alert('Error', 'Password must be enter');
            // }
            return Alert.alert('thankyou ');
        }
             
         else {
             return Alert.alert('Invalid User 😛 {`$userName}`');
        }
        
       
    };
    const [agree, setAgree] = useState(false);
    const validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(userName).toLowerCase());
    }
    return (
        <View style={styles.mainContainer}>
            <View style={{
                paddingVertical: 5,
            }}>
                <ImageBackground style={{
                    opacity: 2,
                    height: undefined,
                    width: 100,
                    flexDirection: "column",
                }}
                    source={require("../../../assets/h.png")}
                >
                    <Text style={styles.loginText}>Login Form </Text>

                </ImageBackground>
            </View>
            <Text> You can reach us anytime via raisingh229@gmail.com</Text>

            <View>
                <Text
                    value={userName}
                    style={styles.PassText}> Enter your name </Text>
                <TextInput style={styles.InputStyle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={false}
                    placeholder="username"
                    placeholderTextColor="#000"
                    value={userName}
                    onChangeText={(actualData) => setUserName(actualData)}

                />
                <Text style={styles.PassText} > Enter your Password</Text>
                <TextInput style={styles.InputStyle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder="enter your password"
                    placeholderTextColor="red"
                    value={password}
                    onChangeText={(actualData) =>
                        setPassword(actualData)}

                />
            </View>
            <View style={styles.mainHeader}>
                <Checkbox
                    value={agree}
                    onValueChange={() =>
                        setAgree(!agree)}
                    color={agree ? "blue" : undefined}
                />
                <Text style={styles.PassText}>
                    I have read terms and conditions
                </Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: agree ? "#3bf7f1" : "#363837"

            }}
                disabled={!agree}
                onPress={() => submit()
                }
            >

                <Text style={styles.buttonStyle}>
                    login
                </Text>
            </TouchableOpacity>

        </View >
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,

        alignItems: "center",
        justifyContent: "space-evenly",


        borderColor: "black",
    },
    mainHeader: {


    },
    textStyle: {
        fontSize: 30,
        textAlign: "auto",
        paddingTop: 40,
        borderRadius: 3,
        borderColor: "rgba(200, 255, 255,)",
        width: "100%",
    },
    textStyle1: {
        width: 100,
        height: 70,
        borderRadius: 4,

        marginLeft: 40,
        backgroundColor: "#fff344"
    },
    buttonStyle: {
        marginTop: 50,
        width: 300,
        fontSize: 39,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 70,
        textTransform: "uppercase",
        borderRadius: 4,
    },
    loginText: {
        marginTop: 20,
        width: "100%",
        fontSize: 32,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        height: 70,
        paddingTop: 20,
        borderRadius: 40,
        flexDirection: "column-reverse",

    },
    PassText: {
        marginHorizontal: 4,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
    },
    InputStyle: {
        flexWrap: "wrap",
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "black",

    }
});
export default ContactYoutube;