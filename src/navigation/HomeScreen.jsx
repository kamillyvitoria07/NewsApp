import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Como colar nas provas sem ser pego:</Text>
      <Text style={styles.description}>
      Existem várias maneiras de colar em uma prova, mas é importante lembrar que colar é uma prática desonesta e pode ter consequências graves. Algumas das maneiras de colar incluem123:
Esconder a folha da cola em um lugar separado da prova, como no banheiro ou na cadeira de alguém.
Esconder as colas sob a manga de uma camisa de manga longa.
Escrever na carteira.
Usar uma borracha amiga.
Colar no sapato.
Manter um equilíbrio entre copiar as respostas e disfarçar.
Para não ser pego, é importante manter a calma e não encarar um mesmo lugar por mais de cinco a dez segundos4.
      </Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
 
export default HomeScreen;