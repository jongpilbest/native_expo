

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Catin_Com from "../Catin_Com";
import { ScrollView } from "react-native-gesture-handler";
//import Catin_Com from "./Catin_Com";

const High = function ({ navigation }) {
 const data = navigation.getParam('data');
 const [change, setchange] = useState([]);
 console.log(data, '높은가격순 넣기');
 useEffect(() => {

  data.sort((a, b) => {
   const nameA = a.price; // ignore upper and lowercase
   const nameB = b.price; // ignore upper and lowercase
   if (nameA < nameB) {
    return 1;
   }
   if (nameA > nameB) {
    return -1;
   }

   // names must be equal
   return 0;
  });
  console.log(data, '가격변동')

  setchange(data);

 }, [])


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

       }}
      > 판매순</Text>
      <TouchableOpacity onPress={() => {
       navigation.navigate('Top_men')
      }}>
       <Text
        style={{
         fontFamily: 'Rn',
         fontSize: 14,

         textDecorationLine: 'underline',
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

       {change.map((el, index) => {
        return <Catin_Com data={el} key={index}></Catin_Com>
       })}

      </View>
     </ScrollView>

    </View>

   </View>






  </View >
 )

}
High.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}>  </Text>,

 };
};
export default High;
