import React from 'react';
import { Text, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import styles from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}> 

      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seu amigos
          </Text>

          <ButtonIcon
            title= "Entrar com Discord"
            onPress={handleSingIn}
          />
      </View>

    </View>
  );
}
