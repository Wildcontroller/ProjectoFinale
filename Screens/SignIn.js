import React, { useState } from 'react'
import  {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

//Permite fazer a identificação do utilizador
const SignIn = () => {
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState(''); 
    const {height} = useWindowDimensions();
    
    const onSignInPressed = () => {
        console.warn('Sign In');
    };
    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }

    const onSignUpPress = () => {
        console.warn('onSignUpPress');
    }
    
    // Mostra o design e como a App se move
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.root}>
            <Text style={styles.title}>Create an account</Text>
            <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode='contain'
            />
            <CustomInput 
            placeholder="Username" 
            value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry/>

            <CustomButton 
            text='Sign In' 
            onPress={onSignInPressed}/>

            <CustomButton text='Forgot Password?' onPress={onForgotPasswordPressed} type="TERTIARY"/>

            <SocialSignInButtons/>

            <CustomButton 
            text="Don't have an account? Create one"
            onPress={onSignUpPress} 
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
    logo: {
        width: '70%',
        maxWidth: 300,
        heigth: 200,
    },
});

export default SignIn;