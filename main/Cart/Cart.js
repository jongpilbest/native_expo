

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';

const Cart = function ({ navigation }) {

 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: Dimensions.get('window').width,
   height: '100%',
   display: 'flex',
   alignItems: 'center'


  }}>
   <View style={{
    width: '100%',
    flex: 5,
    display: 'flex',

    //alignItems: 'center',
    // justifyContent: 'center'
   }}>


    <ScrollView>
     <View style={{
      width: '90%',
      height: Dimensions.get('window').height / 5,
      backgroundColor: '#F0F0F0',
      margin: 5,
      alignSelf: 'center',
      flexDirection: 'row'
     }}>

      <View style={{
       width: '40%',
       height: '100%',
       backgroundColor: 'blue'
      }}>

       <Image

        resizeMode="cover"
        style={{
         width: '100%',
         height: '100%'

        }}
        source={require('./28.png')}
       />
      </View>
      <View style={{
       width: '60%',
       height: '100%',
       //backgroundColor: 'pink',
       flexDirection: 'column'
      }}>
       <Feather style={{
        position: 'absolute',
        bottom: 5,
        right: 10
       }} name="x" size={20} color="black" />
       <Text style={{
        fontFamily: 'Rn',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 10
       }}>라트비아 22 홈 저지</Text>
       <Text style={{
        fontFamily: 'Rn',
        color: '#808080',
        fontSize: 11,
        marginLeft: 10
       }}>남성 • Football
       </Text>
       <View style={{
        width: '90%',
        height: 19,
        //backgroundColor: 'yellow',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 2
       }}>
        <View style={{
         width: '30%',
         height: '100%'
        }}>
         <Text style={{
          fontFamily: 'Rn',
          fontSize: 13,
          marginLeft: 5
         }}> 사이즈</Text>
        </View>

        <View style={
         {
          width: '60%',
          height: '100%',
          backgroundColor: 'white',
          marginLeft: 10,
          display: 'flex',
          alignItems: 'flex-end'
         }
        }>
         <AntDesign style={{
          marginRight: 5
         }} name="caretdown" size={15} color="black" />
        </View>
       </View>
       <View style={{
        width: '90%',
        height: 19,
        //backgroundColor: 'yellow',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 2
       }}>
        <View style={{
         width: '30%',
         height: '100%'
        }}>
         <Text style={{
          fontFamily: 'Rn',
          fontSize: 13,
          marginLeft: 5
         }}> 수량</Text>
        </View>

        <View style={
         {
          width: '60%',
          height: '100%',
          backgroundColor: 'white',
          marginLeft: 10,
          display: 'flex',
          alignItems: 'flex-end'
         }
        }>
         <AntDesign style={{
          marginRight: 5
         }} name="caretdown" size={15} color="black" />
        </View>
       </View>


       <View>
       </View>
       <View style={{
        width: '90%',
        height: 19,
        //backgroundColor: 'black',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 2
       }}>
        <View style={{
         width: '30%',
         height: '100%',
         backgroundColor: '#F0F0F0'
        }}>

        </View>
        <View style={
         {
          width: '60%',
          height: '100%',
          backgroundColor: 'black',
          marginLeft: 10,
          display: 'flex',
          alignItems: 'flex-end',

         }
        }>
         <Text style={{
          fontFamily: 'Rn',
          color: 'white',
          fontSize: 13,
          marginTop: 'auto',
          marginBottom: 'auto'
         }}> 18900원</Text>

        </View>
       </View>
      </View>
     </View>
     <View style={{
      width: '90%',
      height: Dimensions.get('window').height / 5,
      backgroundColor: '#F0F0F0',
      margin: 5,
      alignSelf: 'center'
     }}>

     </View>
     <View style={{
      width: '90%',
      height: Dimensions.get('window').height / 5,
      backgroundColor: '#F0F0F0',
      margin: 5,
      alignSelf: 'center'
     }}>

     </View>
     <View style={{
      width: '90%',
      height: Dimensions.get('window').height / 5,
      backgroundColor: '#F0F0F0',
      margin: 5,
      alignSelf: 'center'
     }}>

     </View>
    </ScrollView>
   </View>
   <View style={{
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0.9,
    borderTopColor: 'black',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent'
   }
   }>
    <View style={{
     width: '95%',
     flex: 1,
     backgroundColor: 'white',
     display: 'flex',
     justifyContent: 'space-between',
     flexDirection: 'row',
     alignSelf: 'center'
    }}>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 14
     }}>
      총 주문금액
     </Text>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 14
     }}>
      109290원
     </Text>

    </View>
    <View style={{
     width: '95%',
     flex: 1,
     backgroundColor: 'white',
     display: 'flex',
     justifyContent: 'space-between',
     flexDirection: 'row',
     alignSelf: 'center'
    }}>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 14
     }}>
      총 주문수량
     </Text>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 14
     }}>
      3개
     </Text>
    </View>
    <View style={{
     width: '95%',
     flex: 1,
     backgroundColor: 'black',
     display: 'flex',
     alignSelf: 'center',
     justifyContent: 'center',
     margin: 5
    }}>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
     }}>
      결제하기
     </Text>

    </View>



   </View>
  </View >

 )

}
Cart.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center',
   fontSize: 15
  }}> 장바구니 </Text>,

 };
};
export default Cart;
