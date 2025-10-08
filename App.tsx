import React from "react";
// * View is like div in web is parent component, Text lets you define or add text in your code
// styleSheet allows you to define css in js instead of css
import { View, Text, StyleSheet } from "react-native";
import Hello from "./components/view.tsx";
import { Texts } from "./components/text.tsx";
export default function App() {
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      {/* <Text style={styles.text}>My First Project</Text>
      <Hello/> */}
      <Texts />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
})