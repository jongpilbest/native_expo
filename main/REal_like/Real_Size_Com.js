

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"

const Real_Size_Com = function ({ navigation, data, goto_size, size, ima, st_p_cart }) {

 // 데이터에서 받은것과 지금 우리가 가진 사이즈와 비교좀..


 const desing_text = function () {


  if (data[1] == 0) {

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

  if (data[1] == 0) {
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



    if (data[1] > 0) {

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


export default Real_Size_Com;
