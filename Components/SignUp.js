import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import{Auth} from 'aws-amplify';
import { FormStyles } from "../styles/FormStyles";

import { validateEmail,validatePassword } from "./validation";


export default function SignUp(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

const[error,setErrors]=useState({email:'',password:''});

async function onSubmit(){
    const emailError=validateEmail(state.email);
    const passwordError=validatePassword(state.password);
    if(emailError || passwordError){
        setErrors({email: emailError,password:passwordError});
    }else{
        try{
            const user= await Auth.signUp({
                 username:state.email,
                 password:state.password,
            });

            props.onStateChange('confrimSignUp',user);
        }catch(error){
            Alert.alert(error.message);
        }
    }
    
}



  if (props.authState === "signUp") {
    return (
      <View style={FormStyles.container}>
        <Text style={FormStyles.title}>회원가입</Text>
        <Text style={FormStyles.label}>Email</Text>

        <TextInput
          style={FormStyles.input} 
          onChangeText={(text) => 
            setState({ ...state, email: text.toLowerCase() })
          }
          placeholder="Enter email"
          value={state.email}
          // secureTextEntry={Platform.OS=== 'ios' ? false : true}
          // keyboardType={Platform.OS=== 'ios' ? null : 'visible-password'}
          // autoCapitalize="none"
        />

        <Text style={FormStyles.error}>{error.email}</Text>

        <Text style={FormStyles.label}>Password</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="Enter password"
          onChangeText={(text) => setState({ ...state, password: text })}
          value={state.password}
          secureTextEntry={true}
        />
        <Text style={FormStyles.error}>{error.password}</Text>

        <TouchableOpacity
          style={FormStyles.button}
          onPress={() => onSubmit()}
        >
          <Text style={FormStyles.buttonText}>Press Here</Text>
        </TouchableOpacity>
        <View style={FormStyles.links}>
          <Button
            onPress={() => props.onStateChange("signIn", {})}
            title="로그인"
            
            accessibilityLabel="back to signIn"
          />
          <Button
            onPress={() => props.onStateChange("confirmSignUp", {})}
            title="코드 등록하기"
            accessibilityLabel="back to confrimSignUp"
          />
        </View>
      </View>
    );
  } else return <></>;
}

 
