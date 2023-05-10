


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'

const Size__COm = function ({ navigation, data, goto_size, size, ima, st_p_cart }) {

 // 데이터에서 받은것과 지금 우리가 가진 사이즈와 비교좀..
 console.log(size, '사이즈 선호목록', ima)

 const desing_text = function () {


  if (data[1] == 0 || data[0] > ima) {

   return (
    {
     color: 'black',
     fontFamily: 'Rn',
     fontSize: 13,
     textAlign: 'center',
     fontWeight: 'bold',
     opacity: 0.3
    }
   )
  }

  else if (data[0] == size) {
   return (
    {
     color: 'white',
     fontFamily: 'Rn',
     fontSize: 13,
     textAlign: 'center',
     fontWeight: 'bold',
     //backgroundColor: 'blue',
    }
   )
  }
  else if (data != size) {
   return (
    {
     color: 'black',
     fontFamily: 'Rn',
     fontSize: 13,
     textAlign: 'center',
     fontWeight: 'bold',
     //backgroundColor: 'blue'
    }
   )

  }

 }


 const design_size = function () {

  if (data[1] == 0 || data[0] > ima) {
   // st_p_cart(1);

   return (
    {
     width: 55,
     height: 25,
     backgroundColor: 'white',
     display: 'flex',
     borderWidth: 1,
     justifyContent: 'center',
     margin: 10,
     opacity: 0.3
    }
   )
  }
  else if (data[0] == size) {


   return (
    {
     width: 55,
     height: 25,
     backgroundColor: 'black',
     display: 'flex',
     borderWidth: 1,
     justifyContent: 'center',
     margin: 10
    }
   )
  }
  else {
   return (
    {
     width: 55,
     height: 25,
     backgroundColor: 'white',
     display: 'flex',
     borderWidth: 1,
     justifyContent: 'center',
     margin: 10
    }
   )
  }

 }




 return (

  <View style={
   design_size()

  }>
   <TouchableOpacity onPress={() => {

    var find_index = ima.findIndex((el) => el[0] == data[0])

    if (data[1] <= ima[find_index][1]) {

     goto_size(data[0])
    }


   }}
   >
    <Text style={
     desing_text()
    }> {data[0]}</Text>
   </TouchableOpacity>


  </View>
 )

}


export default Size__COm;
