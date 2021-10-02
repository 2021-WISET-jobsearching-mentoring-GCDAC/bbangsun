
//***이것이 원래 메인 페이지 입니다.


import React, {Component} from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, TouchableOpacity, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import writeScreen from "./write.js";

let writing = require('./writing32.png');
let addImage = require('./add.png');

const DATA = [
  {
    id: '1',
    title: '첫번째 게시글',
    content: '1번째 본문 내용'
  },
  {
    id: '2',
    title: '두번째 게시글',
    content: '2번째 본문 내용'
  },
  {
    title: '33',
    content: '3번째 왜 추가 안됨?'
  }
  
];

const Item = ({ title, content }) => (
  <View style={styles.item}>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.contetntText}>{content}</Text>
  </View>
);

const renderItem = ({ item }) => (
    <Item title={item.title} content={item.content}/>
  );

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navicontainer}>
        <Image
          style={styles.addimage}
          source={addImage}/>
        
        <Text style={styles.title}>
          Notice Board
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('writeScreen')}>
          <Image
            styles={styles.writing}
            source={writing}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <SafeAreaView style={styles.flatcontainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={ this.state }
          />
        </SafeAreaView>
        
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function main() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="writeScreen" component={writeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width:'100%',
    height:'100%'
  },
  navicontainer: {
    backgroundColor: '#FDF5E6',
    width:'100%',
    height:'7%',
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  addimage: {
    width: 30,
    height: 30,
  },
  writing: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: "Cochin",
    fontSize: 18,
    fontWeight: "bold"
  },

  //flatList styles
  flatcontainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#DEB887',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleText: {
    fontSize: 20,
  },
  contetntText: {
    fontSize: 15,
  }
});

