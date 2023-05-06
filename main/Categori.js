

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Cate_Com from "./Cate_Com";
import { ScrollView } from "react-native-gesture-handler";


const Categori = function ({ navigation }) {

 const data = navigation.getParam('data');
 console.log('카테고리', data)
 return (
  <ScrollView>
   <View style={{
    backgroundColor: 'white',
    flexDirection: "row",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,


    flexWrap: "wrap",
    display: 'flex'

   }}>
    <View style={{
     backgroundColor: 'white',
     flexDirection: "row",
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,


     flexWrap: "wrap",
     display: 'flex'
    }}>
     {
      data.map((el, index) => {
       return <Cate_Com navigation={navigation} data={el} key={index}></Cate_Com>
      })
     }
    </View >
   </View>
  </ScrollView >

 )

}
Categori.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center',
   fontSize: 15
  }}> 카테고리 </Text>,

 };
};
export default Categori;
