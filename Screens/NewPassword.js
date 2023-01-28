import React, { useState } from 'react'
import  {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import NewPassword from '.';

//Permite ao utilizador criar uma nova password para substituir a que tinha
const NewPassword = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState ('');

    const onSubmitPressed = () => {
        console.warm('onConfirmPressed');
    }

    const onSignInPress = () => {
        console.warm('onSignUpPress');
    };

    //Demonstra o design e o estilo das páginas da NewPassword
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.root}>
            <Text style={styles.title}>Reset your password</Text>

            <CustomInput
            placeholder="Code"
            value={code}
            setValue={setCode}/>

            <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}/>

            <CustomInput
            text="Submit"
            onPress={onSubmitPressed}
            />

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

export default NewPassword;
