import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const HookEffects = () => {
    const [myUserData, setmyUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch(
                "https://thapatechnical.github.io/userapi/users.json"
            );
            const myData = await response.json();
            setmyUserData(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getUserData();
    }, [])

    return (
        <View>
            <FlatList

                data={myUserData}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text> </Text>
                        </View>
                    )
                }}



            />


        </View>
    )
}


const styles = StyleSheet.create({

});
export default HookEffects;