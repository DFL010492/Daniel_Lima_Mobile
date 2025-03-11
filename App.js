import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './AppStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importando a biblioteca de ícones

// Impede que a tela de splash desapareça automaticamente
SplashScreen.preventAutoHideAsync();

const integrantesLiga = [
  { id: '1', nome: 'Superman', imagem: require('./assets/imagens/superman.png') },
  { id: '2', nome: 'Batman', imagem: require('./assets/imagens/batman.png') },
  { id: '3', nome: 'Mulher-Maravilha', imagem: require('./assets/imagens/ww.png') },
  { id: '4', nome: 'Flash', imagem: require('./assets/imagens/flash.png') },
  { id: '5', nome: 'Aquaman', imagem: require('./assets/imagens/aquaman.png') },
  { id: '6', nome: 'Ciborgue', imagem: require('./assets/imagens/ciborgue.png') },
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
            <Text style={styles.subTitle}>Integrantes:</Text>
            <FlatList
              data={integrantesLiga}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                  <Image source={item.imagem} style={styles.avatar} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.nome}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#000" style={styles.arrowIcon} />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
