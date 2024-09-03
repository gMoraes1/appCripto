import React, {useState} from 'react';  
import {View,text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';  
import{firestore} from '../firebase';  
import {collection,doc,updateDoc} from 'firebase/firestore';
export default function AlterarCriptos({route,navigation}) {
    const id = route.params.id;
    const [nomeCripto,setnomeCripto] = useState(route.params.nomeCripto); 
    const [siglaCripto,setsiglaCripto] = useState(route.params.siglaCripto);
    const [valorCripto,setvalorCripto] = useState(route.params.valorCripto); 
    async function alterarCripto() {
        try{
            await updateDoc(doc(firestore,"tbmoeda",id),{
                nomeCripto: nomeCripto,
                siglaCripto: siglaCripto,
                valorCripto: valorCripto,
            });
            Alert.alert("Sucesso","Criptomoeda alterada com sucesso");
            navigation.navigate("Home");
        }
        catch(erro){
            console.log("Erro ao alterar criptomoeda",erro);
            Alert.alert("Erro","Erro ao alterar criptomoeda");
        }
    }
    return (
        <View style ={estilo.container}>
            <View>
                <Text style={estilo.titulo}> Alterar dados da Criptomoeda </Text>
            </View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a criptomoeda" 
            onChangeText={setNome} value={nome}/>

            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a sigla" 
            onChangeText={setNome} value={sigla}/>

            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite a valor" 
            onChangeText={setNome} value={valor}/>
            
            <TouchableOpacity style={estilo.btenviar}
            onPress={() => {
                alterarCripto(id,nomeCripto,siglaCripto,valorCripto);
            }}>
                <Text style={estilo.btntxtenviar}> Alterar </Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        marginVertical: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 15,
        backgroundColor: '#9ac234',
        borderRadius: 10,
    },
    btenviar: {
        marginTop: 10,
    },
    btntxtenviar: {
        marginVertical: 40,
        fontSize: 20,
        textAlign: 'center',
    },
});