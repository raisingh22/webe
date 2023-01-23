import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
const FlatlistDemo1 = () => {
  const names = [
    { index:"1",
      name: "harjinder",
      class:"Bsc",
    },
    {index:"2",
      name: "simran",
      class:"B.voc",
    },
    {index:"3",
      name: "harjeet",
      class:"MA",
    },
    {index:"4",
      name: "Amrit",
      class:"B.tec",
    },
    {index:"5",
      name: "Gagan",
      class:"BA",

    },
    
    {index:"6",
      name: "lovejeet",
      class:"10",
    },
    {index:"7",
      name: "Gurwinder",
      class:"12",
    },
  ];
  return (<View>
    <FlatList style={styles.listStyle}
    keyExtractor={(key)=>{
return key.index;
    }}
  // horizontal
  
      //numColumns={2}
   // showsHorizontalScrollIndicator={false}
      data={names }
      renderItem={({item}) => {
       return(
          <View style={styles.viewStyle}>
           <Text style={styles.textStyle}>{[item.index]}</Text>
           <Text style={styles.textStyle}>{[item.name]}</Text>
           <Text style={styles.textStyle}>{[item.class]}</Text>
      </View>)
      }}

    /> 
  </View> );

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color:"white",
    backgroundColor: "orange",
  },
  listStyle:{
    textAlign:"center",
    margin:2,
     
  },
  viewStyle:{
    padding:5,
    margin:2,
  },
  textStyle1:{
    color:"red",
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
  }
});
export default FlatlistDemo1;
