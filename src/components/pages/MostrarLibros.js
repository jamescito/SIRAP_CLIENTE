import React,{useEffect,useState} from 'react';
import {Text,FlatList, View,StyleSheet} from 'react-native';
import axios from 'axios';
import {List,Headline,Button,FAB} from 'react-native-paper';
import globalStyle from '../styles/Global';

const Inicio = ({navigation}) => {
  //state de la app
const[clientes,guardarCliente]=useState([]);
const[consultarApi,guardarConsultarAPI]=useState(true);
  useEffect( ()=>{
    const obtenerClientesApi =async()=>{
      try {
        //const resultado=await axios.get('http://192.168.43.253:3000/clientes');
        const resultado=await axios.get('http:// 192.168.0.183:8000/api/lista/espaniol');
        guardarCliente(resultado.data)
        console.log(resultado.data)
        guardarConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    }
    if(consultarApi){
      obtenerClientesApi();
    }
  },[consultarApi])
    return (
        <View style={globalStyle.contender}>
        <Button style={globalStyle.btn} icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente",{guardarConsultarAPI})}> Nueva palabra</Button>
        <Headline Style={globalStyle.titulo}>{clientes.length >0 ? "Palabras":"Aun no hay palabras "}</Headline>
        <FlatList
          data={clientes}
          keyExtractor={cliente =>(cliente.id).toString() }
          renderItem={({item}) => (
            <List.Item
            style={globalStyle.lista}
              title={item.palabra}
              description={item.traduccion}
              onPress={ () => navigation.navigate("DetallesCliente", {item,guardarConsultarAPI})}
            />
          )}
        />
        {/* <FAB 
          icon="plus"
          style={globalStyle.fab}
          onPress={() => navigation.navigate("NuevoCliente",{guardarConsultarAPI})}
        /> */}
        </View>
      );
}
export default Inicio;