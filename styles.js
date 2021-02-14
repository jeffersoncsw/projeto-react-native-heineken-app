import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#C3C3C3',
        paddingBottom: 30,
    },
    
    logo :{
        width: 200,
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
    },
    
    textInput: {
        textAlign: 'center',
        alignContent: 'flex-start',
        height: 40,
        width: 280,
        borderColor: 'white', 
        paddingVertical: 2,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
    },
    
    btnLogin: {
        backgroundColor: '#008200',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 40,
        width: 160,
        borderRadius: 5
    },

    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
    },

    scrollView:{
        marginHorizontal: 2,
    },

    containerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageHome: {
        width: 320, 
        height: 150,
    },

    btnHome: {
        backgroundColor: '#008200',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 40,
        width: 320,
        borderRadius: 5
    },

    homeBV: {
        backgroundColor: '#FF2B00', 
        alignItems: 'center', 
        width: 320, 
        height: 50, 
        justifyContent: 'center',
        marginBottom: 10,
    },

    textBV:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },

    containerViewProd: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },

    homeProd: {
        backgroundColor: '#205527', 
        alignItems: 'flex-start', 
        width: 320, 
        height: 30, 
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
    },

    textProd:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },

    imageProd: {
        width: 80, 
        height: 80,
        
    },

    containerLista: {
        marginVertical: 15,
        alignItems: 'flex-start', 
    }

});

export default styles;