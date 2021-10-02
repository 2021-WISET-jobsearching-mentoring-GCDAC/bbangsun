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

import { validateEmail} from "./validation";


export default function ConfrimSignUp(props) {
  const [state, setState] = useState({
    email: '',
    confirmationCode: '',
  });

const[error,setErrors]=useState({email:''});

async function onSubmit(){
  const {email:username,confirmationCode:code}=state;
    const emailError=validateEmail(state.email); //이메일 검증
    if(emailError){
        setErrors({email: emailError});
    }else{
        try{
            const user= await Auth.confirmSignUp(username,code);
            setState({confirmationCode:''});
            props.onStateChange('signIn');
        }catch(error){
            Alert.alert(error.message);
        }
    }
    
}



  if (props.authState === "confirmSignUp") {
    return (
      <View style={FormStyles.container}>
        <Text style={FormStyles.title}>회원가입 확인</Text>
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

        <Text style={FormStyles.label}>Code</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="확인코드"
          onChangeText={(text) => setState({ ...state, confirmationCode: text })}
          value={state.confirmationCode}
        />
     

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
            onPress={() => props.onStateChange("signUp", {})}
            title="회원가입"
            accessibilityLabel="back to SignUp"
          />
        </View>
      </View>
    );
  } else return <></>;
}

 
