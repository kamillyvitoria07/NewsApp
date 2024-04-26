import { Text, View, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Como colar nas provas sem ser pego😲🧠!!!
        </Text>
        <Text style={{ fontSize: 16 }}>
          Existem várias maneiras de colar em uma prova, mas é importante lembrar que colar é uma prática desonesta e pode ter consequências graves. Algumas das maneiras de colar incluem:
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          - Esconder a folha da cola em um lugar separado da prova, como no banheiro ou na cadeira de alguém.
        </Text>
        <Text style={{ fontSize: 16 }}>
          - Esconder as colas sob a manga de uma camisa de manga longa.
        </Text>
        <Text style={{ fontSize: 16 }}>
          - Escrever na carteira.
        </Text>
        <Text style={{ fontSize: 16 }}>
          - Usar uma borracha amiga.
        </Text>
        <Text style={{ fontSize: 16 }}>
          - Colar no sapato.
        </Text>
        <Text style={{ fontSize: 16 }}>
          - Manter um equilíbrio entre copiar as respostas e disfarçar. Para não ser pego, é importante manter a calma e não encarar um mesmo lugar por mais de cinco a dez segundos.
        </Text>
      </View>
    </ScrollView>
  );
}
