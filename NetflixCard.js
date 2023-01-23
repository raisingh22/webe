import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Linking } from "react-native";

const NetflixCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/vi/6/66/Wednesday_Netflix_series_poster.png"
            ,
            }}
        />
      
      
      <View style={styles.poster__info}>
        <Text style={[styles.poster__title, styles.common]}>Netflix info</Text>
        <Text style={styles.poster__text}>Netflix info</Text>
    
      </View>
      <Button 
      title="watch now"
        onPress={()=>{
            Linking.openURL(
        "https://www.netflix.com/browse")
        console.log("watch now")
        }}
      />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginBottom:20,
    fontWeight: "bold",
    color: "red",
    textTransform:"uppercase",
  
  },
  poster:{
    width:250,
    borderWidth:1,
    alignItems:"center",
  },
  imgStyle: {
    width: "50%",
    height: undefined,
    aspectRatio:1,
    
},
buttonStyle:{
   borderWidth:0,
    borderRadius: 25,
    
},
poster__text:{
    paddingHorizontal:20,
    marginBottom:10,
    color: "#999",
    
},
poster__title:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:10,

},
poster__info:{
    alignItems:"center",
    marginVertical:10,
},
common:{
  backgroundColor: "red",
  textTransform:"uppercase",

}
});
export default NetflixCard;
