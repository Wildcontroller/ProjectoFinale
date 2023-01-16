import React, { useState } from 'react'
import  {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignUpButtons';

//Permite fazer diferentes verificações e medidas de segurança
const SignUp = () => {
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [Password, setPassword] = useState('');
    const [passwordRepeate, setPasswordRepeat] = useState('');
    
    const onRegisterPressed = () => {
        console.warm('onRegisterPressed');
    }
    
    const onSignUpPress = () => {
        console.warm('onSignUpPress');
    };
    const onTermsOfUsePressed = () => {
        console.warm('onTermsOfUsePressed');
    };
    const onPrivacyPressed = () => {
        console.warm('onPrivacyPressed');
    };
 
    //Demostra como é demonstrado na App
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.root}>
            <Text style={styles.title}>Create an account</Text>
            
            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}/>

            <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail}/>
            
            <CustomInput placeholder="Password" 
            value={Password} 
            setValue={setPassword} 
            secureTextEntry/>

            <CustomInput 
            placeholder="Repeat Password" 
            value={passwordRepeate} 
            setValue={setPasswordRepeat} 
            secureTextEntry/>
            
            <CustomButton 
            text='Register' 
            onPress={onRegisterPressed}/>

            <Text style={styles.text}> 
            By registering, you confirm that you accept our {' '}
            <Text style={style.link} onPress={onTermsOfUsePressed}> 
            Terms of Use 
            </Text>{' '} 
            and {''} 
            <Text style={style.link} onPress={onPrivacyPressed}> 
            Privacy Policy 
            </Text>
            </Text>

            <SocialSignInButtons/>

            <CustomButton 
            text="Have an account? Sign in"
            onPress={onSignInPress} 
            type = "TERTIARY"
            />            

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

export default SignUp;