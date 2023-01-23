import { View, Text ,Button } from 'react-native'
import React from 'react'

const HomeYoutube = ({ route, navigation }) => {
    const {myName }=route.params;
    return (
        <View>
            <Text style={{
                color: 'red', textAlign: 'center',
                fontSize:45,
            }}>Harry { myName}</Text>
            <Button title='GO Back'
                onPress={() => { navigation.goBack() }
                }
            />
            
        </View>
    );
};

export default HomeYoutube;