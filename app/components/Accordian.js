import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import  Colors from '../config/colors';
import Icon from "react-native-vector-icons/MaterialIcons";
/* import {
    Form,
    FormField,
    FormPicker as Picker,
    SubmitButton
  } from "./app/components/forms" */
  
  import InputText from './forms/FormField2';
import { ScrollView } from 'react-native-gesture-handler';
 
export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : true
        }
       
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        
    }
     
   
   
  render() {

    return (
        
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.black} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}}>
                    {
                      
                        this.state.data.map((input, i) => {
                            console.log(input+i+this.props.num+"*-*-*-*-")
                            return (
                                <InputText
                                key={input+this.props.num}
                                keyboardType="numeric"
                                maxLength={2}
                                name={input+this.props.num}
                                placeholder={input+this.props.num}
                                width={"100%"}
                                />
                            )
                        })
                    }

                                     
                </View>
            }
            
       </View>
       
    )
  }

  onClick=(index)=>{
    /* const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp}) */
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.black,
    },
    itemActive:{
        fontSize: 12,
        color: Colors.secondary,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.primary,
    },
    btnActive:{
        borderColor: Colors.secondary,
    },
    btnInActive:{
        borderColor: Colors.primary,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.secondary,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.secondary,
    },
    parentHr:{
        height:1,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.secondary,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.secondary
    },
    colorInActive:{
        borderColor: Colors.secondary,
    }
    
});