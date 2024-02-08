import React, { useState } from "react";
import { Text, TextInput, Button, View} from "react-native-web";


function App() {
  const [num1, setNum1] = useState("Exemplo = 0");
  const [num2, setNum2] = useState("Exemplo = 0");

  function somar() {
     let soma = parseInt(num1) + parseInt(num2);
     console.log("Soma: ", soma)
  }
  return(
    <View>
      <Text>Digite o 1º Numero</Text>
      <TextInput value={num1} onChangeText={setNum1}/>
      <Text>Digite o 2º Numero</Text>
      <TextInput value={num2} onChangeText={setNum2}/>
      <Button title="Somar" onPress={somar}/>
    </View>
  )
}

export default App;

