import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';

import Logo from '../assets/logoSimFundo.png';
import Fbr from '../assets/fbr.jpg';
import Coracao from '../assets/coracao.png';

export default class Doar extends React.Component {

    static navigationOptions = {
        title: 'Parceiros',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={Logo} resizeMode={'stretch'} style={{ width: 180, height: 100, }}></Image>

                    <Text style={styles.h3}>
                        Parceiros
                </Text>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <View style={styles.div}>
                        <Image source={Fbr} style={{ margin: 20 }}></Image>
                        <Text style={{ fontSize: 18, marginBottom: 15, padding: 1, textAlign: 'justify' }}>
                            Criada em 5 de Maio de 2017, por Fabio Batista Rodrigues, especialista no seguimento ortopédico com uma sólida experiência de mais de 10 anos.
                            </Text>
                            <Text style={{ fontSize: 18, marginBottom: 15, padding: 1, textAlign: 'justify' }}>
                            O histórico de seu fundador é marcado pelas inúmeras aulas, exposições e palestras ministradas nacionalmente e internacionalmente.
                            </Text>
                            <Text style={{ fontSize: 18, marginBottom: 15, padding: 1, textAlign: 'justify' }}>
                            A filosofia está associada a maneira humanizada do atendimento, por meio de uma assistência cuidadosa e focada no bem-estar do indivíduo. Reconhecendo assim, a importância e valorizando a vida.
                            </Text>
                            <Text style={{ fontSize: 18, marginBottom: 15, padding: 1, textAlign: 'justify', color: 'red' }}>
                            *** Caso você durante uma compra, tanto na loja fisica como na online, citar o nome da Doeki, irá automaticamente
                            ganhar um desconto de 20%!!! ***
                            </Text>
                            <Text style={{ fontSize: 18, marginBottom: 15, padding: 1, textAlign: 'justify' }}>
                                Para saber mais acesse o site: www.fbrortopedia.com.br ou ligue para o telefone: (11)98213-0054.
                            </Text>
                    </View>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>
                    
                    <TouchableOpacity onPress={() => navigate('Doar')}>
                        <Image source={Coracao} ></Image>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Text style={styles.inicio}>Inicio</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    h3: {
        color: '#34495E',
        fontSize: 40,
        textAlign: 'center',
    },

    linha: {
        width: 350,
        backgroundColor: '#F1C40F',
        height: 2,
        margin: 10,
    },

    div: {
        width: 300,
        borderColor: '#3498DB',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#E5F5FB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inicio: {
        color: 'white',
        fontSize: 35,
        backgroundColor: '#34495E',
        width: 120,
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100 / 2,
        shadowRadius: 3,
        shadowColor: 'black',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }

});