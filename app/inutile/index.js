import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const HomeScreen = ()=>{
  const [inputs, setInputs] = useState([{key: '', value: ''}]);

  const addHandler = ()=>{
    const _inputs = [...inputs];
    _inputs.push({key: '', value: ''});
    setInputs(_inputs);
  }
  
  const deleteHandler = (key)=>{
    const _inputs = inputs.filter((input,index) => index != key);
    setInputs(_inputs);
  }

  const inputHandler = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
    
  }

  return (
    <View style={styles.container}>
         
         <TouchableOpacity
           onPress={addHandler}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "20%",marginVertical: 10, alignSelf:"center"}}
        >
          <Text style ={{color: "#fff"}}> Add </Text>

        </TouchableOpacity>
      <ScrollView style={styles.inputsContainer}>
      {inputs.map((input, key)=>(
        <View style={styles.inputContainer}>
          <TextInput placeholder={"Ajouter Critère"} value={input.value} 
          style={{backgroundColor: "#f8f4f4",
                    borderRadius: 25,
                    width:"85%",
                    height:50,
                
                    padding: 15,
                    marginVertical: 10,
                    }}
                     onChangeText={(text)=>inputHandler(text,key)}/>
          <TouchableOpacity onPress = {()=> deleteHandler(key)}>
            <Text style={{color: "red", fontSize: 13}}>Delete</Text>
          </TouchableOpacity> 
        </View>
      ))}
      </ScrollView>
      <TouchableOpacity
           onPress={addHandler}
         style={{ backgroundColor: "#fc5c65",borderRadius: 25, justifyContent: "center",alignItems: "center",padding: 15,width: "100%",marginVertical: 10, alignSelf:"center"}}
        >
          <Text style ={{color: "#fff"}}> Enregistrer </Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  inputsContainer: {
    flex: 1, marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    height:50,
    borderRadius:35,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  }
})

export default HomeScreen