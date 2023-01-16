import React, { useState } from 'react'
import  {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

//Permita á aplicação a opção de que o Utilizador possa ter se esquecido da password
const ForgotPassword = () => {
    const [pUser, setpUser] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.root}>
            <Text style={styles.title}>Reset your password</Text>
            
            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}/>
            
            <CustomButton 
            text='Send' 
            onPress={onSendPressed}/>

            <CustomButton 
            text="Back to Sign in"
            onPress={onSignInPress} 
            type = "TERTIARY"
            />            
        </View>
        </ScrollView>
    );
};

const styles = StylesSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FCD075'
    }
});

export default ForgotPassword;