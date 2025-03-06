import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { Component, useCallback } from 'react';
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
      <Text style={styles.texto}>Batman</Text>
      <Image 
      source={require('./assets/imagens/bat-logo.png')}
      style={styles.imagem}
      />
      <Jobs />
    </View>
  );
}

class Jobs extends Component {
  render() {
    let img1 = require('./assets/imagens/symbol-on.png');

    return (
      <View style={styles.jobsContainer}>
        <Text style={styles.texto}>Lanterna Verde</Text>
        <View style={styles.imageWrapper}>
          <Image source={img1} style={styles.imagem} />
        </View>
      </View>
    );
  }
}

