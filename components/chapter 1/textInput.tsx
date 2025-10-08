import { TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import "./global.css";

export default function TextInputs() {
    const [name, setName] = useState("");

    return (
        <View className="bg-blue-500 p-2.5">
            <TextInput 
                placeholder="Enter some thing ..." 
                onChangeText={setName}
                value={name}
                className="outline-blue-500 w-25 p-2.5 bg-white rounded border border-gray-300"
            />
            <Text className="font-serif text-xs italic mt-2">
                {name}
            </Text>
        </View>
    )
}