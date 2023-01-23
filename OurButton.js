import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Button</Text>
      <Button
        title="click me"
        onPress={() => {
          console.log("Click me");
          Alert.alert("hello ji kive jj😃");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert("IRON man");
          console.log("Press me");
        }}
      >
        <Text style={styles.ButtonStyle}>hello</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Alert.alert("IRON man");
          console.log("Press me");
        }}
      >
        <Text style={styles.ButtonStyle}>hello</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("IRON man");
          console.log("Press me");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/w.jpg")}
        />

        <Text style={styles.ButtonStyle}>hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontfamily: "lucida grande, tahoma, verdana, arial, sans-serif",
    fontsize: 40,
    margin: 40,
    textAlign: "center",
  },
  ButtonStyle: {
    fontsize: 40,
    margin: 10,
    textAlign: "center",
    backgroundColor: "red",
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
export default OurButton;
