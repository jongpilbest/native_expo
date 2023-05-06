

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Main_com = function ({ navigation, total }) {
 const coco_text = function () {
  if (total.product_name.length > 11) {
   return total.product_name.substr(0, 10) + "..."
  }
  else {
   return total.product_name
  }


 }


 return (
  <TouchableOpacity onPress={() => {

   navigation.navigate('New_fifth', { data: total })

  }
   //navigation.navigate('fifth', { total })
  }>


   <View style={{
    width: Dimensions.get('window').width / 2.3,
    height: '62%',
    backgroundColor: '#F0F0F0',
    margin: 5
   }}>
    <View style={{
     width: '100%',
     height: '80%',

    }}>
     <Image

      resizeMode="cover"
      style={{
       width: '100%',
       height: '100%'

      }}
      source={{ uri: total.product_image[0] }}
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
       {`₩ ${total.price}`}
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
      {total.sebucategori.toString().replace(',', '*')}
     </Text>

    </View>
    <View>

    </View>

   </View>
  </TouchableOpacity>

 )

}


export default Main_com;
