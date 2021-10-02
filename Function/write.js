import React, {Component, useState, useEffect} from 'react';
import { AppRegistry, View, Image, StyleSheet, Text,TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as ImagePicker2 from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

//FlatList data 들 메인에서 불러오기
import DATA from "./main.js";

export default function WriteScreen({navigation}) {

  const [galleryPermission, setGalleryPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  const permisionFunction = async () => {
    // here is how you can get the camera permission

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (imagePermission.status !== 'granted') {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const pick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  // 변수 정의가 안되고 있는 듯?
  //게시글 제목과 본문 데이터 구조
  const[text,setText]=useState('');
  const[content,setContent]=useState('');

 //메인에 있는 flatList
  const addItems=()=>{
    // const titleText = this.state.text
    // const contentText=this.state.content
    let newData ={text,content}
    DATA.addItem(newData)
  };


  return (

    <View style={styles.container}>

      <View style={styles.container3}>
        <TextInput
          style={styles.titleInput}
          underlineColorAndroid="transparent"
          placeholder="제목을 입력하세요"
          placeholderTextColor="gray"
          autoCapitalize="none"

          //텍스트 변할때마다 데이터 바뀐다.
         onChangeText={text => setText(text)}
         defaultValue={text}
        />
        
        <Button style={styles.cameraButton} 
          title={'Gallery'} onPress={(pick)}
        />
        
      </View>

      <View style={styles.container4}>

        <TextInput
          style={styles.contentInput}
          underlineColorAndroid="transparent"
          placeholder="본문을 입력하세요"
          placeholderTextColor="gray"
          autoCapitalize="none"

          //텍스트 변할때마다 본문 데이터 바뀐다.
          onChangeText={content => setContent(content)}
          defaultValue={content}

        />

        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width:110, height:110, borderRadius: 10, margin: 5 }}
          />
        ) : (
          <View style={styles.textBox}>
            <Text>"이미지 첨부는 필수입니다!"</Text>
          </View>
        )}

      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.submitButton} onPress={(addItems)}> 
          <Text
            style={styles.submitButtonText}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
         <Text style = {styles.textBox}>{text}{content}</Text>
      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  container2: {
    backgroundColor: 'white',
    flex:1,
    justifyContent: 'center',
  },
  container3: {
    flex:1,
    flexDirection:'row',
  },
  container4:{
    margin: 15,
    height:350,
    borderWidth:1,
    flexDirection:'column',
    borderColor:"#DEB887"
  },
  titleInput: {
    margin: 15,
    height: 30,
    width: 200,
    borderColor: "#DEB887",
    borderWidth: 1,
    marginTop: 20
  },
  contentInput:{
    margin: 10,
    height: 200,
    borderColor: '#DEB887',
    borderWidth:2
  },
  submitButton: {
    backgroundColor: "#DEB887",
    width: 65,
    height: 40,
    margin: 10,
    marginLeft: 150,
    justifyContent: 'center'
  },
  submitButtonText: {
    color: "white",
    justifyContent:'center',
    margin: 5
  },
  cameraButton:{
    backgroundColor:"pink",
    width:60,
    height:10,
    marginTop:20,
    justifyContent:'center'
  },
  cameraButtonText:{
    color:"black",
    justifyContent:'center',
  },
  textBox:{
    color: "black",
    height:20,
    width:300,
    margin:15,
    justifyContent:"center",
    alignContent:"center"
  }

});