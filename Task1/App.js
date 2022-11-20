import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import List from './src/components/List';
import Home from './src/screens/Home';
import axios from 'axios';
const App = () => {
  const [DATA, setDATA] = useState('');
  const getApi = () => {
    axios
      .get('https://gorest.co.in/public/v2/users/')
      .then(function (res) {
        console.log(res.data);
        setDATA(res.data);
      })
      .catch(function (err) {
        console.log('ERR');
        console.log(err);
      });
  };

  // console.log(getdata);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            marginBottom: 20,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          List user
        </Text>
        <List DATA={DATA}></List>
        <Button title="Get API" color={'green'} onPress={getApi}></Button>
        <Button
          title="Delete"
          color={'red'}
          onPress={() => {
            setDATA('');
          }}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
