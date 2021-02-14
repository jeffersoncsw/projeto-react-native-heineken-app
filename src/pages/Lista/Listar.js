import React from 'react'
import { View, Text, Image } from 'react-native';

const Listar = ({ produto, quantidade, valor }) => {
    return (
        <View >
            <Text>Produto: {produto}</Text>
            <Text>Quantidade: {quantidade}</Text>
            <Text>Valor: {valor}</Text>
            <Text> </Text>
        </View>
    )
}

export default Listar;