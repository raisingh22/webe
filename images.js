import React from 'react';
import { View } from 'react-native';
import CardDetail from '../Components/CardDetails';


const ImageFile =( ) => {
return (
<View>
  <CardDetail  textData="First 😎"
    imgSrc={require("../../assets/w.jpg")}
  />
  <CardDetail  textData="Second 😎"
       imgSrc={require("../../assets/a.png")}
 
  />
  <CardDetail  textData="Third 😎"
      imgSrc={require("../../assets/a.png")}
  />
  <CardDetail  textData="First 😎"
    imgSrc={require("../../assets/w.jpg")}
  />
</View>
)
  
};


export default ImageFile;