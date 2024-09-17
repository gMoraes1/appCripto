import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground } from "react-native";
import { firestore } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function Home({ navigation }) {
    const [criptos, setCriptos] = useState([]);

    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestore, "tbmoeda", id));
            Alert.alert("Sucesso", "Criptomoeda deletada com sucesso");
        } catch (erro) {
            console.log("Erro ao deletar criptomoeda", erro);
            Alert.alert("Erro", "Erro ao deletar criptomoeda");
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, 'tbmoeda'), (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ ...doc.data(), id: doc.id });
            });
            setCriptos(lista);
        });

        return () => unsubscribe();
    }, []);

    return (
               <ImageBackground source={require('../assets/Nasdaq-lancara-negociacao-para-Coinbase-Global.jpg')} style={estilo.fundo}>
        <View style={estilo.container}>

            
            <View>
                <Text style={estilo.title}>Lista de Criptomoedas</Text>
            </View>
            <FlatList
                data={criptos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={estilo.itemContainer}>
                        <TouchableOpacity
                            style={estilo.item}
                            onPress={() => navigation.navigate("AlterarCriptos", {
                                id: item.id,
                                nomeCripto: item.nomeCripto,
                                siglaCripto: item.siglaCripto,
                                valorCripto: item.valorCripto,
                            })}
                        >
                            <Text>Criptomoeda: {item.nomeCripto}</Text>
                            <Text>Sigla: {item.siglaCripto}</Text>
                            <Text>Valor: {item.valorCripto}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteCripto(item.id)} style={estilo.deleteButton}>
                            <Text style={estilo.deleteButtonText}>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={estilo.addButton}
                onPress={() => navigation.navigate("CadastrarCriptos")}
            >
                <Text style={estilo.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
            </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    
    fundo: {
        flex: 1,
    },
    
    title: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 18,
        borderRadius: 22,
        color: 'white',
        fontSize: 25,
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        elevation: 2,
    },
    item: {
        marginBottom: 10,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#007BFF',
        padding: 16,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
