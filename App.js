

import React from "react";
import { StyleSheet, View } from "react-native";
import SearchScreen from "./src/Components/Demo1";
import NetflixCard from "./src/Components/NetflixCard";
import FlatlistDemo from "./src/screens/FlatlistDemo";
import FlatlistDemo1 from "./src/screens/FlatListDemo1";
import ImageFile from "./src/screens/images";
//import ImagesFile from "./src/screens/images";
import ColorGenerator from "./src/screens/Projects/ColorGenerator";
import ContactYoutube from "./src/screens/Projects/ContactYoutube";
import HookEffects from "./src/screens/Projects/HookEffect";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeYoutube from "./src/screens/Projects/HomeYoutube";
import Gallery from "./src/screens/Projects/Gallery";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatlistDemo">
        {/* <Stack.Screen
          name="Login"
          component={ContactYoutube} />
        <Stack.Screen
          name="Home"
          component={HomeYoutube} /> */}
        <Stack.Screen
          name="FlatlistDemo"
          component={FlatlistDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "10%",
  },
});
export default App;
