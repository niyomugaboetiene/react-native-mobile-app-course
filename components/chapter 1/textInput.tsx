import { TextInput } from "react-native";
import React, { useState} from "react";

export default function TextInputs() {
    const [name, setName] = useState("");

    return (
        <TextInput 
            placeholder="Enter some thing ..." 
            onChangeText={setName}
            />
    )
}