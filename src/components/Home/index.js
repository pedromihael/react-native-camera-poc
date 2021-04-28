/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import background from '../../assets/bg_1.png';
import logo from '../../assets/cabine_ufms_logo.png';

export const Home = ({navigation}) => {
  const action = useCallback(() => navigation.navigate('Camera'), [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.logoWrapper}>
          <Image source={logo} />
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>
            Você está prestes a tirar fotos com a Cabine Digital da UFMS 📸
          </Text>
          <Text style={styles.text}>
            Serão 3 fotos, com intervalo de 10 segundos cada ⏰
          </Text>
          <Text style={styles.text}>
            Então bote um sorrisão no rosto, ajeite-se e vamos lá! 😎
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>
            DICA IMPORTANTE: Tente deixar os cantos livres, são neles que a
            moldura vai estar.
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.buttonText}>Partiu!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginVertical: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0088B7',
    // paddingHorizontal: 50,
    display: 'flex',
    marginHorizontal: 90,
    marginTop: 20,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
