/*
                                                          COLOR GENERATOR App


                             */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,                                      //import the Basic Components
  FlatList,
  Alert,
} from "react-native";

const ColorGenerator = () => {
  //function
  const [newColor, setnewColor] = useState([]);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);          //generating different values of COLOR
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    //   console.log(red,green,blue+" \t random ");

    return `rgb(${red},${green},${blue})`;
  };
  console.log(newColor);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
                                                                     //Button
          //randomColor();
          // Alert.alert(randomColor());
          setnewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textStyle}>Generate Random Color</Text>
      </TouchableOpacity>
      <FlatList                                                     //To View in List  of colors
        keyExtractor={(key) => key}
        data={newColor}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  height: 100,
                  borderRadius: 50,
                  margintop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                  
                }}
              >
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //style sheet
  mainContainer: {
    marginTop: 100,
  },

  buttonStyle: {
    backgroundColor: "green",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
    
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
export default ColorGenerator;                      //export the function
 