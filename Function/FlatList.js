import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

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
  
];

const Item = ({ title, content }) => (
  <View style={styles.item}>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.contetntText}>{content}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} content={item.content}/>
  );

  return (
    <SafeAreaView style={styles.flatcontainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

export default App;

