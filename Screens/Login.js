import { Button, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

//Demontra o código de teste de navegação do utilizador e por turno
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [Password, setpPassword] = useState('');
  const [ShowPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  const testelog = () => {
    auth()
    .signInWithEmailAndPassword(email, setPassword)
    .then(userCredentials => {
    const user = userCredentials.user;
    console.log("User: ", user.email, "entrou.");
    if(username == "Diogo")
    {
      navigation.replace("Turnos"); 
    }
    else
    {
      navigation.replace("UserNormal"); 
        
    }
    })
  }

  //EM qualquer pagina tudo o que estiver no return mais abaixo é design
  return (
        <View>
        <TextInput
          value={username}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          value={Password}
          placeholder="Password"
          secureTextEntry={!ShowPass}
          onChangeText={text => setpPassword(text)}
        />

        <Button
        title={ShowPass ? "Hide password" : "Show password"}
        onPress={() => setShowPass(!ShowPass)}
        
        />
        
        <Button
        title="Login"
        onPress={testelog}
        />

        <Button
        title="Registar Conta"
        onPress={() => navigation.replace('Register')}
        />

      </View>
    );

};

export default LoginScreen;