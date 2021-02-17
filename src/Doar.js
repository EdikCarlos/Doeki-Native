import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import Logo from '../assets/logoSimFundo.png';



export default class Doar extends React.Component {
    
    
    static navigationOptions = {
        title: 'Doação',
    };

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={Logo} resizeMode={'stretch'} style={{ width: 180, height: 100, }}></Image>
                    <Text style={styles.h3}>
                        Cadastre-se
                </Text>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <TextInput style={styles.input} placeholder={'Nome'} />
                    <TextInput style={styles.input} placeholder={'E-mail'} />
                    <TextInput style={styles.input} placeholder={'Data Nascimento(DD/MM/AAAA)'} />
                    <TextInput style={styles.input} placeholder={'Telefone(ex.1123456-8870)'} />
                    <TextInput style={styles.input} placeholder={'CEP (ex.08036-505'} />
                    <TextInput style={styles.input} placeholder={'Endereço'} />

                    <View style={styles.input}>
                    <RNPickerSelect
                        onValueChange={(value) => Alert.alert(`Você é um ${value}!`)}  placeholder={{label: 'Escolha uma opção'}}
                        items={[
                            { label: 'Doador', value: 'Doador' },
                            { label: 'Beneficiário', value: 'Beneficiário' },
                        ]}
                    
                    /></View>

                    <TouchableOpacity onPress={() => Alert.alert('Cadastro efetuado!')} onPressOut={() => navigate('Home')}>
                        <Text style={styles.enviar} >Enviar</Text>
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

    input: {
        backgroundColor: '#E5F5FB',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        width: '90%',
        height: 50,
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 10,
    },
    
    enviar: {
        fontSize: 20,
        backgroundColor: '#F1C40F',
        width: 80,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        shadowRadius: 3,
        shadowColor: 'black',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
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

    
})