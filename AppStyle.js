import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontFamily: "BlackOpsOne", // Nome da fonte carregada no useFonts
    fontWeight: "normal",
    color: "#333",
  },
  imagem: {
    width: 100, // Defina um tamanho fixo para a imagem
    height: 100,
    resizeMode: 'contain', // Ajusta a imagem sem distorcer
    alignContent: "center",
    justifyContent: "center",
  },
  jobsContainer: {
    alignItems: "center", // Centraliza tudo dentro do Jobs
    justifyContent: "center",
    marginTop: 20,
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 180,
  },
});

