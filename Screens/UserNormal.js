import { Button, View, Text, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const UserNormal = ({ navigation }) => {

  //Identifica o email do utilizador
  const Item = auth().currentUser.email

  const logout = () => {
    auth()
    .signOut()
    .then(() => navigation.replace("Login"));
  }
  //Determinar o turno do utilizador e a que horas começa e acaba
  function horaFinal(documentSnapshot){return documentSnapshot.get('horaFim');}
  function horaInicial(documentSnapshot){return documentSnapshot.get('horaInicio');}
  function nomeuser(documentSnapshot){return documentSnapshot.get('username')}
  const [horaInicio, setHoraInicio] = React.useState([]);
  const [horaFim, setHoraFim] = React.useState([]);
  const [nome, setnome] = React.useState([]);
  const lerNome = () => {
    firestore()
    .collection('TesteId')
    .doc(Item)
    .get()
    .then(documentSnapshot => nomeuser(documentSnapshot))
    .then(feito => {
      const nome = []
      console.log(auth().currentUser);
      nome.push(feito);
      setnome(nome);
    })
  };
  
  //Testa o ID do utilizador
  const lerFinal = () => {
    firestore()
    .collection('TesteId')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaFinal(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraFim(horinha);
    })
  };

  const lerInicial = () => {
    firestore()
    .collection('TesteId')
    .doc(Item)
    .get()
    .then(documentSnapshot => horaInicial(documentSnapshot))
    .then(feito => {
      const horinha = []
      horinha.push(feito);
      setHoraInicio(horinha);
    })
  };

  useEffect(() => {
    lerNome()
    lerFinal()
    lerInicial()
  }, []);
//Utilizar a função logout quando não queremos parar de utilizar a App
  return (
    <View>
    <Text>{nome}</Text>
    <Text>Hora do Inicio - {horaInicio}</Text>
    <Text>Hora do Fim do Turno - {horaFim}</Text>
    <Button
    title="Login"
    onPress={()=>logout()}/>
    </View>
  );
};

export default UserNormal;