import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './AppStyle';

// Impede que a tela de splash desapareça automaticamente
SplashScreen.preventAutoHideAsync();

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
    return null; // Retorna null enquanto a fonte está carregando
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.texto}>Projeto 2</Text>
      <Image 
      source={require('./assets/imagens/bat-logo.png')}
      style={styles.imagem}
      />
    </View>
  );
}
