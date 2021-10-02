import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Amplify from 'aws-amplify';
import { AmplifyTheme } from 'aws-amplify-react-native';
import config from './aws-exports';
import Main from './Function/main';
import { 
  Authenticator,
  SignIn,
  ConfirmSignIn,
  ForgotPassword
} from 'aws-amplify-react-native/dist/Auth';

import SignUp from './Components/SignUp';
import ConfirmSignUp from './Components/ConfirmSignUp'


function Home(props){
  if(props.authState==='signedIn')
  return <Main/>;
  else return <></>
}

// import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator
      usernameAttributes="email" 
      hideDefault={true} 
      onStateChange={authState=> console.log("authState...",authState)}>
        <Home/>
        <SignUp/>
        <SignIn/>
        <ConfirmSignUp/>
        <ConfirmSignIn/>
        <ForgotPassword/>
      </Authenticator>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


