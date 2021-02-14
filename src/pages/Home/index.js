import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

import styles from '../../../styles';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.homeBV}>
                    <Text style={styles.textBV}>Bem-vindo a Heineken</Text>
                </View>
                <View style={styles.containerView}>
                    <Image
                        source={require('../../../assets/home-heineken.jpg')}
                        style={styles.imageHome}
                    />
                </View>
                <View style={styles.homeProd}>
                    <Text style={styles.textProd}>Produtos</Text>
                </View>
                <View style={styles.containerViewProd}>
                    <Image
                        source={require('../../../assets/barril-heineken.png')}
                        style={styles.imageProd}/>
                    
                    <Image
                        source={require('../../../assets/garrafa-heineken.png')}
                        style={styles.imageProd}
                    />
                     <Image
                        source={require('../../../assets/garrafa-heineken-0-330ml.jpg')}
                        style={styles.imageProd}
                    />
                </View>
                <View style={styles.containerViewProd}>
                    <Image
                        source={require('../../../assets/garrafa-heineken-250ml.png')}
                        style={styles.imageProd}/>
                    
                    <Image
                        source={require('../../../assets/garrafa-heineken-600ml.png')}
                        style={styles.imageProd}
                    />
                     <Image
                        source={require('../../../assets/lata-heineken-0.jpg')}
                        style={styles.imageProd}
                    />
                </View>
                <View style={styles.containerViewProd}>
                    <Image
                        source={require('../../../assets/lata-heineken-250ml.jpg')}
                        style={styles.imageProd}/>
                    
                    <Image
                        source={require('../../../assets/lata-heineken-350ml.jpg')}
                        style={styles.imageProd}
                    />
                     <Image
                        source={require('../../../assets/chopp-barril-heineken-30lt.png')}
                        style={styles.imageProd}
                    />
                </View>
                <View style={styles.containerView}>
                    <TouchableOpacity
                        style={styles.btnHome}
                        onPress={() => navigation.navigate('Lista')} >
                        <Text style={styles.textBtn}>Lista de Produtos</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}