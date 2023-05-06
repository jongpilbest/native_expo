

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"



const Catin_Com = function ({ navigation, data }) {
 const coco_text = function () {
  if (data.product_name.length > 11) {
   return data.product_name.substr(0, 10) + "..."
  }
  else {
   return data.product_name
  }


 }

 return (

  <TouchableOpacity onPress={() =>
   navigation.navigate('New_fifth', { data: data })
  }>
   <View style={{
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3.75,
    backgroundColor: '#F0F0F0',
    borderColor: 'white',
    borderWidth: 2
   }}>

    <View style={{
     width: '100%',
     height: '80%',
     //backgroundColor: 'blue'
    }}>
     <Image

      resizeMode="cover"
      style={{
       width: '100%',
       height: '100%'

      }}
      source={{ uri: data.product_image[0] }}
     />

     <View style={{
      width: 80,
      height: 25,
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0
     }}>
      <Text style={{
       fontFamily: 'Rn',
       color: 'white',
       fontsize: 13,
       marginLeft: 10
      }}>
       {`₩${data.price}`}

      </Text>

     </View>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 13,
      marginLeft: 10
     }}>

      {
       coco_text()

      }
     </Text>
     <Text style={{
      //fontFamily: 'Rn',
      fontSize: 9,
      marginLeft: 10,
      color: '#808080'

     }}>
      {data.sebucategori.toString().replace(',', '*')}
     </Text>

    </View>
    <View>

    </View>

   </View>
  </TouchableOpacity>


 )

}


export default Catin_Com;
