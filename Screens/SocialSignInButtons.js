import React from 'react'
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

//Permite ter acesso a redes sociais
const SocialSignInButtons = () => {
    const onSignInFacebbok = () => {
        console.warn('onSignInFacebbok');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () => {
        console.warn('onSignInApple');
    };
    //Mostra os links dos butões
    return(
        <View>
            <CustomButton 
            text='Sign In with Facebook' 
            onPress={onSignInFacebbok}
            gbColor="#E7EAF4"
            fgColor="4765A9"
            />
            <CustomButton 
            text='Sign In with Google' 
            onPress={onSignInGoogle}
            gbColor="#FAE9EA"
            fgColor="DD4D44"
            />
            <CustomButton 
            text='Sign In with Apple' 
            onPress={onSignInApple}
            gbColor="#e3e3e3"
            fgColor="363636"
            />
        </View>
    )
}
export default SocialSignInButtons;