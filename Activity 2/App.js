import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Getting up from bed',
  },
  {
    title: 'Checking the class schedule',
  },
  {
    title: 'Eat Breakfast',
  },
   {
    title: 'Take a shower',
  },
  {
    title: 'Review the lessons',
  },
  {
    title: 'Eat Lunch',
  },
   {
    title: 'Playing Dota',
  },
  {
    title: 'Take a rest',
  },
  {
    title: 'Eat Dinner',
  },
   {
    title: 'Play Dota again',
  },
  {
    title: 'Go to sleep',
  },
  {
    title: 'Go to sleep',
  },
  {
    title: 'Getting up from bed again',
  },
  {
    title: 'Checking the class schedule',
  },
  {
    title: 'Eat Breakfast',
  },
   {
    title: 'Take a shower',
  },
  {
    title: 'Review the lessons',
  },
  {
    title: 'Eat Lunch',
  },
   {
    title: 'Playing Dota',
  },
  {
    title: 'Take a rest',
  },
  {
    title: 'Eat Dinner',
  },
   {
    title: 'Play Dota again',
  },
  {
    title: 'Go to sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) =><TouchableOpacity> <Item title={item.title} /> </TouchableOpacity>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});

export default App;