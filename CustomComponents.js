import React from "react";
import { Text, StyleSheet, View } from "react-native";
//import CustomComponents from "./src/screens/CustomComponents";

const CustomComponents = () => {
    const myName="We love react native ";
    const ele="harjinder"
  return (
    <View>
    <Text style={styles.textStyleone}> ❤ Welcome to my application</Text>
       <Text style={styles.textStyle}> {myName}  </Text>
       <Text style={styles.textStyletwo}> My name is{ele}</Text>
  
     </View>
  );
};
const styles = StyleSheet.create({
    
  textStyleone:{
    color: "blue",
    marginTop:50,
    fontSize:30,
  },
  textStyle: {
        color: "red",
        marginTop:100,
        fontSize:40,
        fontWeight:"bold",
        textAlign: "center",
        paddingTop: "10%", 
  },
  textStyletwo:{
fontSize:30,
color:"green",
  },
});

export default CustomComponents;
