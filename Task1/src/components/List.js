import {StyleSheet, FlatList, Text, ScrollView, View} from 'react-native';
import React from 'react';
import Item from './Item';
const List = ({DATA}) => {
  const renderItem = ({item}) => (
    <Item
      fullName={item.name}
      email={item.email}
      gender={item.gender}
      isStatus={item.status}
    />
  );
  console.log(DATA);
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  //   container: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     fontWeight: 'bold',
  //   },
});
