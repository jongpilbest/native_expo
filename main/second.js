

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";


const second = function ({ navigation }) {

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
second.navigationOptions = () => {
 return {
  header: () => false,
 };
};
export default second;
