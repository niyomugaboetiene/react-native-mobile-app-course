import { Image } from "react-native";

export default function Images() {
    return (
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
         style={{ width: 100, height: 100 }}           
      />
    )
}