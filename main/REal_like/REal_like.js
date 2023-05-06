

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Real_Com from "./Real_Com";
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { tokenAction } from "../../redux/token";
const REal_like = function ({ navigation }) {


 const cart = useSelector((state) => state.token.like);
 const dispatch = useDispatch();
 const [like, setlike] = useState([]);

 useEffect(() => {
  console.log('선호 리스트?', cart)
  setlike(cart);
 }), [cart];



 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
   borderRadius: 5,



  }}>




   <View style={{
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',

   }}>

    <View style={{
     width: '90%',
     backgroundColor: 'white',
     height: 50,

     //  backgroundColor: 'black'


    }}>


     <View style={{
      width: '30%',
      height: 30,
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'pink',
      flexDirection: 'row',
      marginTop: 'auto',
      marginBottom: 'auto',

     }}>
      <Text
       style={{
        fontFamily: 'Rn',
        fontSize: 14,

        textDecorationLine: 'underline',

       }}
      > 세일</Text>
      <TouchableOpacity onPress={() => {
       navigation.navigate('Top_men')
      }}>
       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14
        }}
       > 품절</Text>

      </TouchableOpacity>


     </View>


    </View>
    <ScrollView
     contentContainerStyle={{ flexGrow: 1 }}
    >
     <View style={{
      backgroundColor: 'white',
      flexDirection: "row",
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 2,
      //flexWrap: "wrap",
      display: 'flex'
     }}>

      <View style={{
       width: '100%',
       // height: '100%',
       //flex: 1
      }}>
       {

        like.map((el, inex) => {
         return <Real_Com data={el} key={inex}> </Real_Com>

        })

       }
      </View>


     </View>
    </ScrollView>
   </View >





  </View >
 )

}
REal_like.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center',
   fontSize: 15
  }}> 선호 목록 </Text>,

 };
};
export default REal_like;