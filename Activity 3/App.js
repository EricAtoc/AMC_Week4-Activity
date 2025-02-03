import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
 {
    id: 'a',  
    title: 'Getting up from bed',
  },
  {
    id: 'b',  
    title: 'Checking the class schedule',
  },
  { 
    id: 'c', 
    title: 'Eat Breakfast',
  },
   {
    id: 'd', 
    title: 'Take a shower',
  },
  {
    id: 'e', 
    title: 'Review the lessons',
  },
  {
    id: 'f', 
    title: 'Eat Lunch',
  },
   {
    id: 'g', 
    title: 'Playing Dota',
  },
  {
    id: 'h', 
    title: 'Take a rest',
  },
  {
    id: 'i', 
    title: 'Eat Dinner',
  },
   {
    id: 'j', 
    title: 'Play Dota again',
  },
  {
    id: 'k', 
    title: 'Go to sleep',
  },
  {
    id: 'l', 
    title: 'Go to sleep',
  },
  {
    id: 'm', 
    title: 'Getting up from bed again',
  },
  {
    id: 'n', 
    title: 'Checking the class schedule',
  },
  {
    id: 'o', 
    title: 'Eat Breakfast',
  },
   {
    id: 'p', 
    title: 'Take a shower',
  },
  {
    id: 'q', 
    title: 'Review the lessons',
  },
  {
    id: 'r', 
    title: 'Eat Lunch',
  },
   {
    id: 's', 
    title: 'Playing Dota',
  },
  {
    id: 't', 
    title: 'Take a rest',
  },
  {
    id: 'u', 
    title: 'Eat Dinner',
  },
   {
    id: 'v', 
    title: 'Play Dota again',
  },
  {
    id: 'w', 
    title: 'Go to sleep',
  },
];

const COLORS = ['blue', 'red', 'yellow', 'green', 'violet', 'brown', 'orange', 'pink', 'magenta', 'cyan', 'gold', 'silver',
                'grey', 'lightblue', 'indigo', 'lightgreen', 'black', 'wheat', 'blue', 'orange', 'cyan', 'pink'];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;