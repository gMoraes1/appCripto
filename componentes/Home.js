import React, {useEffect,useState} from "react";
import {View,StyleSheet,FlatList,TouchableOpacityBase,Text,Alert} from "react-native";
import {Firestore} from "./Firebase";
import {collection, oneSnapshot, deleteDoc,doc} from "/firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({navigation}) {
    const [criptos,setCriptos] = useState([]);

    async function deleteCripto(id) {
        try{
            await deleteDoc(doc(Firestore,"tbmoeda",id));
            Alert.alert("Sucesso","Criptomoeda deletada com sucesso");
        }
        catch(erro){
            console.log("Erro ao deletar criptomoeda",erro);
        }
    }
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(Firestore,'tbmoeda'),(Querysnapshot) => {
            const lista = [];
            QuerySnapshot.forEach((doc) => {
                lista.push({...doc.data(), id: doc.id});
            });
            setCriptos(lista);
        });
        return () => unsubscribe();
    },[]);
    
    return (
        <View>
            <View>
                <Text>Lista de CriptoMoedas</Text>
            </View>
            
            <FlatList
                data={criptos}
                renderItem={({item}) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={()=>navigation.navigate("Altera Criptos",{
                                id: item.id,
                                nomeCripto: item.nomeCripto,
                                siglaCripto: item.siglaCripto,
                                valorCripto: item.valorCripto,
                            })}>

                            <View>
                                <Text>Criptomoeda: <Text>{item.nomeCripto}</Text></Text>
                                <Text>Criptomoeda: <Text>{item.siglaCripto}</Text></Text>
                                <Text>Criptomoeda: <Text>{item.valorCripto}</Text></Text>
                            </View>
                            </TouchableOpacity>

                            <View>
                                <TouchableOpacity onPress={()=>deleteCripto(item.id)}>
                                    <Text>Deletar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />

            <TouchableOpacity onPress={()=>navigation.navigate("Cadastrar Criptos")}>
               +
            </TouchableOpacity>
        </View>
    )
}