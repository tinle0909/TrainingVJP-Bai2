import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import List from '../components/List';

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
