import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Rimaz');
  const [age, setAge] = useState('23');
  const [person, setPerson] = useState ({name: 'Rimaz Khan', age: 23})

  const clickHandler = () => {
    setName('not Rimaz')
    setPerson({name: 'Amhar', age: 21})
  }

  //List and Scroll View
  const [people, setPeople] = useState([
    {name: 'Nifla', key:'1'},
    {name: 'Kaisan', key: '2'},
    {name: 'Rimaz', key: '3'},
    {name: 'Amhar', key: '4'},
    {name: 'Umar', key: '5'},
  ]);

  const pressHandler = (key) => {
    console.log(key);
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.boldText}>My Name is {name}</Text>
        <Text style={styles.boldText}>Age is {age}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
        <Text>Name</Text>
        <TextInput
        //multiline
         style={styles.input}
         placeholder='Enter your name'
         onChangeText={(val) => setName(val)}
         />

        <Text>Age</Text>
        <TextInput
         style={styles.input}
         keyboardType='numeric'
         placeholder='Enter your age'
         onChangeText={(val) => setAge(val)}
         />

      </View>
      <ScrollView>
      <View style={styles.body}>
        <Text>Home</Text>
        <Text>Shop</Text>
        <Text>Contact</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update me' onPress={clickHandler}/>
      </View>

      <View>
        <Text style={styles.boldText}>List and Scroll View</Text>
        {people.map((item) =>{
          return(
            <>
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
              </Text>
            </View>
            </>
          )
        })}
        <View>
           <FlatList
            numColumns={2}
            keyExtractor={(item) => item.key}
            data={people}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
           />
        </View>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 4,
    marginBottom: 10,
  },
  //List and Scroll View
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 24,
    //width: 300,
    fontWeight: 'bold',
    marginRight: 20,
  },
});
