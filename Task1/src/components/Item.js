import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Item = ({fullName, email, gender, isStatus}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        <Text style={styles.title}>Name: </Text>
        {fullName}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.title}>Email: </Text>
        {email}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.title}>Gender: </Text>
        {gender}
      </Text>
      <Text style={styles.item}>
        <Text style={styles.title}>Status: </Text>
        {isStatus}
      </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 5,
    backgroundColor: '#6C9CFA',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  title: {
    fontWeight: 'bold',
  },
  item: {},
});
