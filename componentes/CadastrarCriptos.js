import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {firestore} from '../firebase';
import {collection, addDoc} from 'firebase/firestore';

export default function CadastrarCriptos({navigation}) {
    const [nomeCripto, setnomeCripto] = useState(null);
    const [siglaCripto, setsiglaCripto] = useState(null);
    const [valorCripto, setvalorCripto] = useState(null);

    async function addCripto() {
        try {
            const docRef = await addDoc(collection(firestore, 'tbmoeda'), {
                nomeCripto: nomeCripto,
                siglaCripto: siglaCripto,
                valorCripto: valorCripto,
            });
            console.log("Cadastrado com sucesso", docRef.id);
            Alert.alert("cadastro", "Criptomoeda cadastrada com sucesso")
            navigation.navigate("Home");
        } catch (erro) {
            console.log("Erro ao cadastrar criptomoeda", erro);
            Alert.alert("Erro", "Erro ao cadastrar criptomoeda");
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}> Cadastrar Criptomoeda </Text>
            </View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a criptomoeda"
                onChangeText={setnome} value={nome} />

                <TextInput style={estilo.input} placeholder="Digite a sigla"onChange={
                    setSigla} value={sigla} />

                <TextInput style={estilo.input} placeholder="Digite o valor"onChange={
                    setValor} value={valor} />
                


            <TouchableOpacity 
            style={estilo.btenviar}
                onPress={() => {
                    addCripto();
                }}>
                <Text style={estilo.btntxtenviar}> Enivar </Text>
            </TouchableOpacity>
        </View>
    );
}