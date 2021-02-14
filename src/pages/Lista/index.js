import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, FlatList, View } from 'react-native'

import Listar from './Listar';

import styles from '../../../styles';

const dados = [
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN lata 350ml",
        quantidade: 1 + "un",
        valor: "R$4,09",
    },
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN Long Neck 330ml",
        quantidade: 1 + "un",
        valor: "R$ 4,89",
    },
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN Zero Álcool Lata 350ml",
        quantidade: 1 + "un",
        valor: "R$ 4,09",
    },
    {
        id: Math.random(),
        produto: "Kit Cerveja HEINEKEN Barril 5L",
        quantidade: 1 + "un",
        valor: "R$ 79,99",
    },
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN Garrafa 600ml",
        quantidade: 1 + "un",
        valor: "R$ 9,29",
    },
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN Lata 250ml",
        quantidade: 1 + "un",
        valor: "R$ 3,19",
    },
    {
        id: Math.random(),
        produto: "Cerveja HEINEKEN Garrafa 250ml",
        quantidade: 1 + "un",
        valor: "R$ 4,59",
    },
]

export default function Lista({ navigation }) {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLista}>
                <FlatList
                    data={dados}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <Listar produto={item.produto} quantidade={item.quantidade} valor={item.valor}/>
                    )}
                />
            </View>
            <View style={styles.containerView}>
                <TouchableOpacity
                    style={styles.btnHome}
                    onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.textBtn}>Voltar para Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}