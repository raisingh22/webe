import React from 'react';
import { View ,Text ,StyleSheet ,Image} from 'react-native';

const CardDetail =({textData , imgSrc}) => {
return(
    
    <View style={styles.listStyle}>
        <Text style={styles.textStyle}>{textData}</Text>
 <Image style={styles.imageStyle} source={imgSrc}/>
         </View>
);

};
const styles = StyleSheet.create({
    listStyle:{
        display:"flex",
          justifyContent:"center",
          alignItems:"center",
    },
    textStyle: {
     fontSize:40,
      margin:30,
    },
    imageStyle:{
        display:"flex",
        height:200,
        width:100,
    }
  });


export default CardDetail;