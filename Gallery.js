import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import * as RNFS from 'react-native-fs';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then((result) => {
                setImages(result.filter((item) => item.isFile() && item.name.endsWith('.jpg') || item.name.endsWith('.jpeg') || item.name.endsWith('.png')).map(item => item.path));
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message, err.code);
                Alert.alert('Error', err.message);
                setIsLoading(false);
            });
    }, []);

    const handleDelete = (item) => {
        Alert.alert(
            'Delete Image',
            'Are you sure you want to delete this image?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        RNFS.unlink(item)
                            .then(() => {
                                setImages(images.filter(image => image !== item));
                            })
                            .catch((err) => {
                                console.log(err.message);
                                Alert.alert('Error', err.message);
                            });
                    },
                },
            ],
            { cancelable: false },
        );
    };

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>

                return (
                <View style={styles.container}>
                    <FlatList
                        data={images}
                        numColumns={3}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        )}
                    />
                </View>
                );
            </View>
        )
    }    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '33%',
    aspectRatio: 1,
    margin: 8,
  },
});

    export default Gallery;