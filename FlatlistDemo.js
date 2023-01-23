import React from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
const FlatlistDemo = () => {
  const names = 
    [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "image": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "image": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "image": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "image": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "image": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "image": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "image": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "image": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "image": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "image": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
      },
      {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "image": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
      },
      {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "image": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
      },
      {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "image": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
      },
      {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "image": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
      },
      {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "image": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
      },
      {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "image": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
      }
    ]
  return (<View>
  <Text style={styles.textStyle1}  >List of Class </Text>
  
    <FlatList style={styles.listStyle}
    keyExtractor={(key)=>{
return key.id;
    }}
   horizontal
      //numColumns={2}
    showsHorizontalScrollIndicator={false}
      data={names }
      renderItem={({item}) => {
       // console.log(item.name);
        return(
          <View style={styles.viewStyle}>
           <Text style={styles.textStyle}>{[item.albumId]}</Text>
           <Text style={styles.textStyle}>{[item.id]}</Text>
           <Text style={styles.textStyle}>{[item.title]}</Text>
      </View>)
      }}

    />
     <Button style={styles.imageStyle}
    title="hello"
    onPress={() => {
          console.log("Click me");
    }}
  />
  </View> );

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color:"white",
    backgroundColor: "green",
  },
  listStyle:{
    textAlign:"center",
    margin:20,
    padding:35,
    
    
  },
  viewStyle:{
    padding:5,
    margin:5,
    borderWidth:3,
    backgroundColor:"black",
  },
  textStyle1:{
    color:"red",
    fontSize:30,
    fontWeight:"bold",
    paddingTop:30,
    textAlign:"center", borderRadius:40,
    borderColor:"red",
    
  },
  imageStyle:{
    width:"100%",
    flexWrap:"wrap",
    display:"flex",
    alignItems:"center",
  
  }
});
export default FlatlistDemo;
