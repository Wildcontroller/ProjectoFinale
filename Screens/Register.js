import { Button, View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//Regista o utilizador e a sua password
const RegisterScreen = ({ navigation }) => {

  const [pUser, setpUser] = useState('');
  const [pText, setpText] = useState('');
  const [password, setpPassword] = useState('');

//Certifica-se de que que uma conta é criada, testa essa hipótese mas também tem o dever de saber se o email é válido
  const Register = () =>
  {
    auth()
    .createUserWithEmailAndPassword(pText, password)
    .then(() => {
      console.log('Conta Criada');
      firestore()
      .collection('testeid')
      .doc(pUser)
      .set({
        username: pUser,
        email: pText,
      })
      .then(() => {
        console.log('Acho q deu');
      });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email já existe");
      }
      if (error.code === 'auth/invalid-email') {
        alert("Email Invalido");
      }
    });
  }

  //É o screen que demonstra as ações da aplicação dos butões, da utilização de emails e passwords, está inerligado com o LoginScreen
  return (
    <View>
    <TextInput
      value={pUser}
      placeholder="Username"
      onChangeText={text => setpUser(text)}
    />

    <TextInput
      value={pText}
      placeholder="Email"
      onChangeText={text => setpText(text)}
    />

    <TextInput
      value={password}
      placeholder="Password"
      onChangeText={text => setpPassword(text)}
    />

    <Button
      title="Registar Conta"
      onPress={Register}
    />

    <Button
      title="Iniciar Sessão"
      onPress={() => navigation.replace('Login')}
    />

    </View>
  );
};

export default RegisterScreen;
