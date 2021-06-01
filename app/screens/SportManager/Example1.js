 import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert , TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { MaterialCommunityIcons } from "@expo/vector-icons";
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom', 'Cond.Phy', 'vitesse', 'Poids', 'Delete'],
      tableData: [
        ['Akacha', '+4%', '-3%', '-4%', '5'],
        ['aAkacha', '+4%', '-3%', '-4%', '5'],
        ['1Akacha', '+4%', '-3%', '-4%', '5'],
        ['aAkacha','+4%', '-3%', '-4%', '5'],
        ['1Akacha', '+4%', '-3%', '-4%', '5'],
        ['aAkacha', '+4%', '-3%', '-4%', '5'],
        ['1Akacha', '+4%', '-3%', '-4%', '5'],
        ['1Akacha', '+4%', '-3%', '-4%', '5'],
        ['aAkacha','+4%', '-3%', '-4%', '5'],
        ['1Akacha', '+4%', '-3%', '-4%', '5'],                     
        ['aAkacha','+4%', '-3%', '-4%', '5']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = () => (
      <TouchableOpacity >
      <View style={{
          width: 70,
          paddingBottom: 8,
          justifyContent: "center",
          alignItems: "center",}}>
        <MaterialCommunityIcons
          name="account-edit"
          size={35}
          color="#000"
        />

      </View>
    </TouchableOpacity>
    );
    
 
    return (
      <View style={styles.container}>
        <ScrollView>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                    
                  ))
                  
                }
              </TableWrapper>
              
              
            ))
            
          }
           
        </Table>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 80, backgroundColor: '#808B97' },
  text: { margin: 10 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
}); 
//exemple2
/* import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom', 'Eval2', 'Eval3', 'Eval4', 'Eval5', 'Eval6', 'Eval7', 'Update', 'Delete'],
      widthArr: [
        ['akacha', '+4%' , '-4%', '+4%' , '-4%', '+4%' , '-4%'],
        ['akacha', '+4%' , '-4%', '+4%' , '-4%', '+4%' , '-4%'],
        ['akacha', '+4%' , '-4%', '+4%' , '-4%', '+4%' , '-4%'],
        ['akacha', '+4%' , '-4%', '+4%' , '-4%', '+4%' , '-4%'],
        ['akacha', '+4%' , '-4%', '+4%' , '-4%', '+4%' , '-4%']
      ]
    }
  }
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
 
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
}); */