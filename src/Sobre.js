import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Logo from '../assets/logoSimFundo.png';
import Ods from '../assets/ODS3.png';
import Coracao from '../assets/coracao.png';

export default class Doar extends React.Component {

    static navigationOptions = {
        title: 'Sobre',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={Logo} resizeMode={'stretch'} style={{ width: 180, height: 100, }}></Image>
                    <Text style={styles.h3}>
                        Quem Somos
                     </Text>
                    <View>
                        <Text style={styles.linha}></Text>
                    </View>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, padding: 5, textAlign:'justify' }}>
                            Desenvolvemos esse projeto através de um programa realizado pela Recode uma organização social que promove o empoderamento digital.
                        </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, padding: 5, textAlign:'justify' }}>
                            Nosso projeto tem como objetivo resolver uma necessidade social através da tecnologia. No Brasil de acordo com o Censo de 2010 através do IBGE, quase 45 milhões de Brasileiros são deficientes, cerca de 24% da população!!!
                         </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, padding: 5, textAlign:'justify' }}>
                            Pensando nisso, elaboramos um website, visando à necessidade social voltada para as pessoas com deficiência física, nosso projeto tem como solução intermediar doações de aparelhos (cadeiras de rodas, cadeiras de banho, muletas,
                            bengalas, ou quaisquer outros tipos de acessórios para deficientes) sendo novos ou usados, porém em bom estado.
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>
                    <Text style={styles.h3}>
                        Planejamento Estratégico
                     </Text>
                    <View>
                        <Text style={styles.linha}></Text>
                    </View>
                    <Text style={styles.h3}>
                        Missão
                     </Text>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            Levar ao mundo um espirito solidário e parceiro, promovendo a equidade e a empatia, além do respeito as diferenças.
                         </Text>
                    </View>

                    <Text style={styles.h3}>
                        Visão
                     </Text>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            Criar uma ponte entre quem possui equipamentos e quem necessita , de forma simples, direta e segura.
                         </Text>
                    </View>

                    <Text style={styles.h3}>
                        Propósito
                     </Text>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            Impulsionar o deficiente para uma qualidade de vida melhor.
                         </Text>
                    </View>

                    <Text style={styles.h3}>
                        Valores
                     </Text>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            Comprometimento, cooperação, empatia, ética, segurança, confiabilidade e mentalidade de transformação social.
                         </Text>
                    </View>
                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <Text style={styles.h3}>
                        A Doeki atende principalmente a ODS:
                     </Text>
                    <Image source={Ods} style={{ width: 200, height: 200 }}></Image>
                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <Text style={styles.h3}>
                        Resumo da Solução
                     </Text>
                    <View style={styles.div}>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            - Sabe aquele equipamento que está parado no cantinho da sua casa?
                        </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            - Ele pode ser a solução para a mudança da vida de outra pessoa.
                            </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            - Basta você se cadastrar em nosso site e iremos fazer a ponte entre você e a pessoa.
                            </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            - O processo todo será seguro e ao final você receberá uma foto da pessoa ajudada com seu equipamento, para que você tenha certeza de que ele foi entregue para quem realmente precisava.
                            </Text>
                        <Text style={{ fontSize: 18, marginBottom: 15, paddingLeft: 5, textAlign:'center' }}>
                            - Lembre-se, doar é o maior ato de humanidade que podemos ter, e nosso pagamento são as emoções que iremos dar e receber.
                         </Text>
                    </View>

                    <View>
                        <Text style={styles.linha}></Text>
                    </View>

                    <TouchableOpacity onPress={() => navigate('Doar')}>
                        <Image source={Coracao} ></Image>
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

    div: {
        width: 300,
        borderColor: '#3498DB',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#E5F5FB',
        margin: 20
    },

    linha: {
        width: 350,
        backgroundColor: '#F1C40F',
        height: 2,
        margin: 10,
    }
});