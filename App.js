import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './AppStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Impede que a tela de splash desapareça automaticamente
SplashScreen.preventAutoHideAsync();

const integrantesLiga = [
  { id: '1', nome: 'Superman', ator: 'Henry Cavill', imagem: require('./assets/imagens/superman.png') },
  { id: '2', nome: 'Batman', ator: 'Ben Affleck', imagem: require('./assets/imagens/batman.png') },
  { id: '3', nome: 'Mulher-Maravilha', ator: 'Gal Gadot', imagem: require('./assets/imagens/ww.png') },
  { id: '4', nome: 'Flash', ator: 'Ezra Miller', imagem: require('./assets/imagens/flash.png') },
  { id: '5', nome: 'Aquaman', ator: 'Jason Momoa', imagem: require('./assets/imagens/aquaman.png') },
  { id: '6', nome: 'Ciborgue', ator: 'Ray Fisher', imagem: require('./assets/imagens/ciborgue.png') },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    'BlackOpsOne': require('./assets/fonts/BlackOpsOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Liga da Justiça</Text>
            <Image source={require('./assets/imagens/jl.png')} style={styles.logo} />
            <Text style={styles.description}>
              A Liga da Justiça, também conhecida como Liga da Justiça da América (no original, Justice League of America),
              é uma fictícia equipe de super-heróis originada nas histórias em quadrinhos publicadas pela DC Comics.
            </Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Orçamento: 300000000</Text>
              <Text style={styles.infoText}>Nota: 8.4</Text>
              <Text style={styles.infoText}>Duração: 120 min.</Text>
              <Text style={styles.infoText}>Lançamento: 2017-11-17</Text>
            </View>
            <Text style={styles.subTitle}>Integrantes:</Text>
            <FlatList
              data={integrantesLiga}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                  <Image source={item.imagem} style={styles.avatar} />
                  <View>
                    <Text style={styles.cardTitle}>{item.nome}</Text>
                    <Text style={styles.cardSubtitle}>{item.ator}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
