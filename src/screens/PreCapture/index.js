/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {View, Image} from 'react-native';

import background from '../../assets/bg_1.png';
import logo from '../../assets/cabine_ufms_logo.png';

import {
  Container,
  Background,
  LogoWrapper,
  Description,
  Text,
  Button,
  ButtonText,
} from './styles';

export const PreCapture = ({navigation}) => {
  const action = useCallback(() => navigation.navigate('Camera'), [navigation]);

  return (
    <Container>
      <Background source={background}>
        <LogoWrapper>
          <Image source={logo} />
        </LogoWrapper>
        <Description>
          <Text>
            Você está prestes a tirar fotos com a Cabine Digital da UFMS 📸
          </Text>
          <Text>Serão 3 fotos, com intervalo de 10 segundos cada ⏰</Text>
          <Text>Então bote um sorrisão no rosto, ajeite-se e vamos lá! 😎</Text>
        </Description>
        <Description>
          <Text>
            DICA IMPORTANTE: Tente deixar os cantos livres, são neles que a
            moldura vai estar.
          </Text>
        </Description>
        <View>
          <Button onPress={action}>
            <ButtonText>Partiu!</ButtonText>
          </Button>
        </View>
      </Background>
    </Container>
  );
};
