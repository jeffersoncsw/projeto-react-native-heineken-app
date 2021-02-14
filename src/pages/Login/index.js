import React from 'react'
import { SafeAreaView, TouchableOpacity, TextInput, Text, Image } from 'react-native'
import styles from '../../../styles';

export default function Login({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../../assets/heineken.png')}
          style={styles.logo}
        />
        <TextInput 
            style={styles.textInput}
            placeholder="Digite um usuario"
        />
        <TextInput 
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Digite uma senha"
        />
        <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => navigation.navigate('Home')} >
            <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }