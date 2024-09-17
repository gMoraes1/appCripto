import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { firestore } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function AlterarCriptos({ route, navigation }) {
    const id = route.params.id;
    const [nomeCripto, setnomeCripto] = useState(route.params.nomeCripto); 
    const [siglaCripto, setsiglaCripto] = useState(route.params.siglaCripto);
    const [valorCripto, setvalorCripto] = useState(route.params.valorCripto);

    async function alterarCripto() {
        try {
            await updateDoc(doc(firestore, "tbmoeda", id), {
                nomeCripto: nomeCripto,
                siglaCripto: siglaCripto,
                valorCripto: valorCripto,
            });
            Alert.alert("Sucesso", "Criptomoeda alterada com sucesso");
            navigation.navigate("Home");
        } catch (erro) {
            console.log("Erro ao alterar criptomoeda", erro);
            Alert.alert("Erro", "Erro ao alterar criptomoeda");
        }
    }

    return (
            <ImageBackground source={require('../assets/webimage-12B7D506-A311-4B19-99871314F525675F.jpg')} style={estilo.fundo}>
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Alterar dados da Criptomoeda</Text>
            </View>
            <TextInput
                autoCapitalize='words'
                style={estilo.input}
                placeholder="Digite a criptomoeda"
                onChangeText={setnomeCripto}
                value={nomeCripto}
            />
            <TextInput
                autoCapitalize='characters'
                style={estilo.input}
                placeholder="Digite a sigla"
                onChangeText={setsiglaCripto}
                value={siglaCripto}
            />
            <TextInput
                keyboardType='numeric'
                style={estilo.input}
                placeholder="Digite o valor"
                onChangeText={setvalorCripto}
                value={valorCripto}
            />
            <TouchableOpacity
                style={estilo.btenviar}
                onPress={alterarCripto}
            >
                <Text style={estilo.btntxtenviar}>Alterar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

    fundo: {
        flex: 1,
    },

    titulo: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 10,
        padding: 18,
        borderRadius: 22, 
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        width: '90%',
    },
    btenviar: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    btntxtenviar: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});
