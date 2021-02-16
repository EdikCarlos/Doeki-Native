import React from 'react';
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
 } from 'react-native';

import Logo from '../assets/logoSimFundo.png';
import Sobre from '../assets/sobre.png';
import Doar from '../assets/coramao.png';
import Apoia from '../assets/aperto.png';


export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image source={Logo} resizeMode={'stretch'} style={{ width: 280, height: 170, marginTop: -50, marginBottom: 5 }}></Image>
                
                <Text style={styles.linha}>
                </Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{ alignItems: 'center', margin: 20, borderColor: '#F1C40F', borderWidth:4, borderRadius:5 }} onPress={() => navigate('Sobre')}>
                    <Image source={Sobre} resizeMode={'stretch'} style={{ width: 80, height: 80 }}></Image>
                    <Text>Sobre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: 'center', margin: 20, borderColor: '#F1C40F', borderWidth:4, borderRadius:5 }} onPress={() => navigate('Doar')}>
                    <Image source={Doar} resizeMode={'stretch'} style={{ width: 80, height: 80 }}></Image>
                    <Text>Doar</Text>
                </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={{ alignItems: 'center', borderColor: '#F1C40F', borderWidth:4, borderRadius:5 }} onPress={() => navigate('Apoio')}>
                    <Image source={Apoia} resizeMode={'stretch'} style={{ width: 80, height: 80 }} ></Image>
                    <Text>Parceiros</Text>
                </TouchableOpacity>


            </View>
        );
    }

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    linha: {
        width: 340,
        backgroundColor: '#3498DB',
        height: 5,
        margin: 10,
    },
});