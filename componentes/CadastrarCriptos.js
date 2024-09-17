import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import { firestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function CadastrarCriptos({ navigation }) {
    const [nomeCripto, setnomeCripto] = useState('');
    const [siglaCripto, setsiglaCripto] = useState('');
    const [valorCripto, setvalorCripto] = useState('');

    async function addCripto() {
        try {
            const docRef = await addDoc(collection(firestore, 'tbmoeda'), {
                nomeCripto: nomeCripto,
                siglaCripto: siglaCripto,
                valorCripto: valorCripto,
            });
            console.log("Cadastrado com sucesso", docRef.id);
            Alert.alert("Cadastro", "Criptomoeda cadastrada com sucesso");
            navigation.navigate("Home");
        } catch (erro) {
            console.log("Erro ao cadastrar criptomoeda", erro);
            Alert.alert("Erro", "Erro ao cadastrar criptomoeda");
        }
    }

    return (
               <ImageBackground source={require('../assets/criptomoedas_03-1200x800.jpg')} style={estilo.fundo}>
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Cadastrar Criptomoeda</Text>
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
                onPress={addCripto}
            >
                <Text style={estilo.btntxtenviar}>Enviar</Text>
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
        padding: 18,
        borderRadius: 22,
        color: 'white',
        fontSize: 25,
        marginVertical: 20,
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
