import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { Component, useCallback } from 'react';
import { View, Text, Image, ScrollView, } from 'react-native';
import { styles } from './AppStyle';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
      <SafeAreaProvider>
    <SafeAreaView edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require('./assets/imagens/jl.png')}
          style={styles.logo}
        />
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  </View>
  );
}


