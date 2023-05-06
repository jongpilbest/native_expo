

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from "react-native-gesture-handler";
import Catin_Com from "./Catin_Com";

const Ca_in = function ({ navigation }) {
 const data = navigation.getParam('data');
 console.log(data, '데이터 넣기')
 return (

  <View style={{
   backgroundColor: '#F2F5F6',
   marginRight: 10,
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
   borderRadius: 5,


  }}>

   <View style={{
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 1.6,

   }}>

    <View style={{
     width: '100%',
     backgroundColor: 'white',
     height: 50,

     // justifyContent: 'space-between'
    }}>


     <View style={{
      width: '80%',
      height: 30,
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'pink',
      flexDirection: 'row',
      marginTop: 'auto',
      marginBottom: 'auto'
     }}>
      <Text
       style={{
        fontFamily: 'Rn',
        fontSize: 14,

        textDecorationLine: 'underline',
       }}
      > 판매순</Text>
      <TouchableOpacity onPress={() => {
       navigation.navigate('High', { data: data })
      }}>
       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14
        }}
       > 높은 가격순</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
       navigation.navigate('Low', { data: data })
      }}>

       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14
        }}
       > 낮은 가격순</Text>
      </TouchableOpacity>

     </View>


    </View>
    <View style={{
     backgroundColor: 'white',
     flexDirection: "row",
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,


     flexWrap: "wrap",
     display: 'flex'
    }}>
     <ScrollView>
      <View style={{
       backgroundColor: 'white',
       flexDirection: "row",
       width: Dimensions.get('window').width,
       height: Dimensions.get('window').height,


       flexWrap: "wrap",
       display: 'flex'
      }}>

       {data.map((el, index) => {
        return <Catin_Com navigation={navigation} data={el} key={index}></Catin_Com>
       })}

      </View>
     </ScrollView>

    </View>

   </View>






  </View >
 )

}
Ca_in.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}>  </Text>,

 };
};
export default Ca_in;
