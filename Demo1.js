import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = () => {
        fetch(`https://www.google.com/search?q=${searchTerm}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => setSearchResults(data.results))
            .catch(error => setError(error.message));
    };

    return (
        <View>
            <Text style={{ color: 'red' }}>{error}</Text>

            <TextInput style={{paddingTop:50,}}
                value={searchTerm}
                onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                placeholder="Search"
            />
            <Button onPress={handleSearch} title="Search" />
            {searchResults.map((result) => (
                <Text key={result.id}>{result.title}</Text>
                
            ))}
        </View>
    );
};

export default SearchScreen;
