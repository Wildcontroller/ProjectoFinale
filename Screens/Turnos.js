import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

//Regista os turnos de cada utilizador, certifica-se quem é escolhido, e faz a mudança de turno
const TurnosScreen = ({navigation}) => {
  const [selectedShift, setSelectedShift] = useState(null);

  const [selectedShift2, setSelectedShift2] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);

  const [visible, setVisible] = useState(true);

  const [escolhido, setEscolhido] = useState(true);


  const handleSelectShift = (shift) => {
    setSelectedShift(shift);
    console.log("Ricardo");
    setVisible(false)
  };

  const handleSelectShift2 = (shift) => {
    setSelectedShift2(shift);
    console.log("Joao");
    setEscolhido(false)
  };

  const handleSelectUser = (shift) => {
    console.log("Tiago");
    setSelectedUser(shift)
  };

//Um temporizador para saber quando um turno começa e quando acaba
  const comecar = ['8:00','9:00','10:00','11:00','12:00'];

  const acabar = ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
// Envia para outro utilizador 
  const Enviar = () => {
    firestore()
    .collection('testeid')
    .doc(selectedUser)
    .update({
      horaInicio: selectedShift,
      horaFim: selectedShift2
    })
    .then(() => {
      alert("Turno Criado!\n Obrigado pela utilização da nossa App!");
      navigation.replace("Login")
    });
  };

  const [data] = React.useState([]);
  //Realiza um teste ao ID incerido
  useEffect(() => {

    const collectionRef = firestore().collection('TesteId');
    collectionRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.id);
    });
    });
  }, []);

  if(visible)
  {
    //Selecionar quando queremos que um turno começa
    return (
      <View>
        <Text>Selecione a hora que quer começar:</Text>
        {comecar.map((shift) => (
          <TouchableOpacity
            key={shift}
            onPress={() => handleSelectShift(shift)}
            style={{
              backgroundColor: shift === selectedShift ? 'gray' : 'black',
              padding: 10,
              margin: 10,
            }}
          >
            <Text>{shift}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  else
  {
    //Indica quando acaba cada turno
    if(escolhido)
    {
      return (
        <View>
          <Text>Selecione a hora que o turno acabe:</Text>
          {acabar.map((shift) => (
            <TouchableOpacity
              key={shift}
              onPress={() => handleSelectShift2(shift)}
              style={{
                backgroundColor: shift === selectedShift2 ? 'gray' : 'black',
                padding: 10,
                margin: 10,
              }}
            >
              <Text>{shift}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    else
    {
      return (
        <View>
          {data.map((shift) => (
            <TouchableOpacity
              key={shift}
              onPress={() => handleSelectUser(shift)}
              style={{
                backgroundColor: shift === selectedUser ? 'gray' : 'black',
                padding: 10,
                margin: 10,
              }}
            >
              <Text>{shift}</Text>
            </TouchableOpacity>
          ))}
          <Button
          title='Enviar para o Utilizador'
          onPress={Enviar}
          />
          
        </View>
      );
    }
    

    

  }


  
};

export default TurnosScreen;
