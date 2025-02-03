import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';

const initialData = [
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

const COLORS = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#18bb86', '#e149de', '#5f8f11', '#823013', '#d2bb88', '#2c90d0', '#cce004', '#818fee', '#9FE2BF', '#558868', '#ba5be6', '#692ce8', '#efbd9c', '#c146a6', '#DFFF00', '#17e247', '#a1c468', '#1840eb', '#ff0702'];

const Item = ({ item, onToggle, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onToggle} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Checkbox
      status={item.done ? 'checked' : 'unchecked'}
      onPress={onToggle}
      color={item.done ? "white" : "#6495ED"} // White checkmark when checked
      uncheckedColor="#6495ED" // Blue outline when unchecked
    />
  </TouchableOpacity>
);

const App = () => {
  const [data, setData] = useState(initialData);

  const toggleDone = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Count finished and not finished tasks
  const finishedCount = data.reduce((count, task) => (task.done ? count + 1 : count), 0);
  const notFinishedCount = data.length - finishedCount;

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.done ? '#6495ED' : COLORS[index % COLORS.length];
    const textColor = item.done ? 'white' : 'black';

    return (
      <Item
        item={item}
        onToggle={() => toggleDone(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.headerText}> To do List</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>☑ Checked: {finishedCount}</Text>
          <Text style={styles.summaryText}>☒ Unchecked: {notFinishedCount}</Text>
        </View>

        {/* Task List */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={data}
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

  header: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
