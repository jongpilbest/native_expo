
import React from "react"
import { View, Text, ScrollView, Image, Dimensions } from "react-native"

import Jumon_Image from "./Jumon_Image";
import { Entypo } from '@expo/vector-icons';

const Jumon_list = function ({ data }) {
 return (
  <View style={{
   width: '95%',
   height: Dimensions.get('window').height / 5,
   backgroundColor: 'white',
   alignSelf: 'center'
  }}>

   <View style={{
    width: '100%',
    flex: 1,
    //backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center'
   }}>
    <Text style={{
     fontFamily: 'Rn',
     fontWeight: 'bold',
     fontSize: 12
    }}>

     {data.Date
     }
    </Text>
   </View>

   <View style={{
    width: '100%',
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 0.9,
    display: 'flex',

   }}>
    <ScrollView horizontal={true}>

     {
      data.cart.items.map((el, index) => {
       return <Jumon_Image data={el} key={index}>

       </Jumon_Image>
      })
     }

     <Entypo name="dots-three-vertical" style={{
      alignSelf: 'center',
      display: 'flex'
     }} size={25} color="black" />
    </ScrollView>

   </View>
  </View>


 )

}

export default Jumon_list