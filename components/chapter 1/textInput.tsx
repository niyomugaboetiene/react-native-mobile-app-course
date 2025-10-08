import { TextInput, View, StyleSheet, Text } from "react-native";
import React, { useState} from "react";

export default function TextInputs() {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <TextInput 
               placeholder="Enter some thing ..." 
               onChangeText={setName}
               value={name}
               style={styles.input}
        />
        <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 10,
        width: 50
    },
    input: {
        outlineColor: 'blue',
        width: 100,
        padding: 10
    },
    text: {
        fontFamily: 'serif',
        fontSize: 12,
        fontStyle: 'italic'
    }
});