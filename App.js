import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function App() {
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");

  function somar() {
    let soma = parseInt(num1) + parseInt(num2);
    console.log("Soma: ", soma);
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Text>Digite o 1º Numero</Text>
      <TextInput value={num1} onChangeText={setNum1} style={styles.input} />
      <Text>Digite o 2º Numero</Text>
      <TextInput value={num2} onChangeText={setNum2} style={styles.input} />
      <Button title="Somar" onPress={somar} />
      <View style={{ height: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',
    backgroundColor: 'yellow'
  },
});

export default App;
