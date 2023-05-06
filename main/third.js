

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";


const third = function ({ navigation }) {

 return (

  <View style={{
   backgroundColor: '#F2F5F6',
   marginRight: 10,
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
   borderRadius: 5,
   marginTop: 10,
   opacity: 0.9,
   //alignContent: 'center'


  }}>
  
  </View >
 )

}
third.navigationOptions = ({ navigation }) => {
 return {

  title: '',
  headerRight: () => {
   return <View style={{
    flexDirection: 'row'
   }}>
    <Feather
     style={{
      margin: 10
     }}
     name="search" size={24} color="black" />
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>

     <Feather style={{
      margin: 10
     }} name="user" nav={navigation} size={24} color="black" />
    </TouchableOpacity>


   </View>




  }


 };
};

export default third;
