

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"


const New_Coms = function ({ navigation, data }) {

 return (

  <View style={{
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height * 0.35,

  }}>
   <Image
    style={{
     width: '100%',
     resizeMode: "stretch",
     //transform: [{ scale: 0.5 }],
     height: '100%'
     , backgroundColor: '#EBEEEF',

    }}
    source={{ uri: data }}
   ></Image>
  </View>

 )

}


export default New_Coms;
