import React, { Component } from "react";
import { View } from "react-native";
import Multiple from "react-native-multi-selection";
import Screen from "../components/Screen";

const data =  [
  {
    id: "01",
    index: 0,
    Specialite: "Karate",
    name: "Ammar Ammar",
   
  },
  {
    id: "02",
    index: 1,
    Specialite: "Karate",
    name: "Akcha Akacha",
    
  },
 /*  {
    id: "03",
    index: 2,
    Specialite: "Karate",
    name: "Katy Bsdgvass",
    
  },
  {
    id: "04",
    index: 3,
    Specialite: "Box",
    name: "Mcintyrsdgve Reynolds",
  
  },
  {
    id: "05",
    index: 4,
    Specialite: "Box",
    name: "Torrsdves Knox",
   
  },
  {
    id: "06",
    index: 4,
    Specialite: "Box",
    name: "Torres Knsdvox",
   
  },
  {
    id: "07",
    index: 4,
    Specialite: "Box",
    name: "Josseph Pazzsdvcsco",
   
  },
  {
    id: "08",
    index: 4,
    Specialite: "Box",
    name: "Farid Akadvxcha",
   
  },
  {
    id: "09",
    index: 4,
    Specialite: "Foot",
    name: "Youssef Akavsdvcha ",
   
  },
  {
    id: "01",
    index: 0,
    Specialite: "Foot",
    name: "Herring Aguirsdvgsdre",
   
  },
  {
    id: "02",
    index: 1,
    Specialite: "Foot",
    name: "Kellie Rossdva",
    
  },
  {
    id: "03",
    index: 2,
    Specialite: "Foot",
    name: "Katy Basdfvss",
    
  },
  {
    id: "04",
    index: 3,
    Specialite: "Foot",
    name: "Mcintyre Resdvynolds",
  
  },
  {
    id: "05",
    index: 4,
    Specialite: "hand",
    name: "Torrevsdxcvs Knox",
   
  },
  {
    id: "06",
    index: 4,
    Specialite: "hand",
    name: "Torsdvres Knox",
   
  },
  {
    id: "07",
    index: 4,
    Specialite: "hand",
    name: "Josseph Pazcsdvzsco",
   
  },
  {
    id: "08",
    index: 4,
    Specialite: "hand",
    name: "Farid Aksvcacha",
   
  },
  {
    id: "09",
    index: 4,
    Specialite: "hand",
    name: "Youssef Akacsfvha ",
   
  },
  {
    id: "01",
    index: 0,
    Specialite: "hand",
    name: "Herring Agudsvfirre",
   
  },
  {
    id: "02",
    index: 1,
    Specialite: "bascket",
    name: "Kellie Rqsfosa",
    
  },
  {
    id: "03",
    index: 2,
    Specialite: "bascket",
    name: "Kadfvvsdty Bass",
    
  },
  {
    id: "04",
    index: 3,
    Specialite: "bascket",
    name: "Mcintyre R xeynolds",
  
  },
  {
    id: "05",
    index: 4,
    Specialite: "bascket",
    name: "Torres K vnox",
   
  },
  {
    id: "06",
    index: 4,
    Specialite: "bascket",
    name: "Torrexvcs Knox",
   
  },
  {
    id: "07",
    index: 4,
    Specialite: "bascket",
    name: "Josseph Pazzscxco",
   
  },
  {
    id: "08",
    index: 4,
    Specialite: "bascket",
    name: "Farid Akachvxca",
   
  },
  {
    id: "09",
    index: 4,
    Specialite: "bascket",
    name: "Youssef Akcwcvacha ",
   
  },
  {
    id: "11",
    index: 0,
    Specialite: "Kong-fu",
    name: "Herricdwvcng Aguirre",
   
  },
  {
    id: "12",
    index: 1,
    Specialite: "Kong-fu",
    name: "Kellcwvie Rosa",
    
  },
  {
    id: "13",
    index: 2,
    Specialite: "Kong-fu",
    name: "Kwvcaty Bass",
    
  },
  {
    id: "14",
    index: 3,
    Specialite: "Kong-fu",
    name: "Mcintycwvre Reynolds",
  
  },
  {
    id: "15",
    index: 4,
    Specialite: "Kong-fu",
    name: "Torrescdw Knox",
   
  },
  {
    id: "16",
    index: 4,
    Specialite: "Kong-fu",
    name: "Torrwcxes Knox",
   
  },
  {
    id: "17",
    index: 4,
    Specialite: "Kong-fu",
    name: "Jossepcsh Pazzsco",
   
  },
  {
    id: "18",
    index: 4,
    Specialite: "Kong-fu",
    name: "Farx<wcid Akacha",
   
  },
  {
    id: "19",
    index: 4,
    Specialite: "Kong-fu",
    name: "Youssef Akqxacha ",
   
  },
  {
    id: "21",
    index: 0,
    Specialite: "Swimming",
    name: "Salah sdwfcx",
   
  },
  {
    id: "22",
    index: 1,
    Specialite: "Swimming",
    name: "sdùjfkfc Rosa",
    
  }, */
  {
    id: "23",
    index: 2,
    Specialite: "Swimming",
    name: "Mariem ben Ali",
    
  },
  {
    id: "24",
    index: 3,
    Specialite: "Swimming",
    name: "Abdallah ben salah",
  
  },
  {
    id: "25",
    index: 4,
    Specialite: "Swimming",
    name: "Ahmed ben salah",
   
  },
  {
    id: "26",
    index: 4,
    Specialite: "Swimming",
    name: "Ali ben Salah",
   
  },
  {
    id: "27",
    index: 4,
    Specialite: "Swimming",
    name: "mario Pazzsco",
   
  },
  {
    id: "28",
    index: 4,
    Specialite: "Swimming",
    name: "Khaled Akacha",
   
  },
  {
    id: "29",
    index: 4,
    Specialite: "Swimming",
    name: "Akacha Mohamed",
   
  },
 ];

export default class App extends Component {
  state = {
    data: data,
    selected: []
  };

  render() {
    return (
        <Screen>
      <View style={{ flex: 1 }}>
        <Multiple
          data={this.state.data}
          selected={this.state.selected}
          onChange={selected => this.setState({ selected })}
          identifiers={["id", "name", "Specialite"]}
        />
      </View>
      </Screen>
    );
  }
}
