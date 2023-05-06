

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';

import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';
const My_page = function ({ navigation }) {
 //const user = navigation.getParam('user');
 const name = useSelector((state) => state.token.name);
 console.log('네임', name)


 console.log(name, '????')
 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


   //alignContent: 'center'


  }}>
   <View style={{
    width: '100%',
    flex: 1
   }}>
    <View style={{
     width: '40%',
     height: 35,
     backgroundColor: 'white',
     zIndex: 2,
     position: 'absolute',
     right: 20,
     top: '20%',
     display: 'flex',
     alignItems: 'flex-end',
     flexDirection: 'row',
     justifyContent: 'space-between'
    }}>
     <Text style={{
      color: 'black',
      fontSize: 15,
      fontFamily: 'Rn',
      marginBottom: 2,


     }}> {name}님</Text>
     <EvilIcons name="pencil" style={{
      marginBottom: 5
     }} size={30} color="black" />
    </View>

    <View style={{
     width: '20%',
     height: 25,
     backgroundColor: 'white',
     zIndex: 2,
     position: 'absolute',
     right: 20,
     top: '50%',
     display: 'flex',
     justifyContent: 'center'

    }}>
     <Text style={{
      color: 'black',
      fontSize: 13,
      fontFamily: 'Rn',

      textAlign: 'center'


     }}>
      Gold
     </Text>
    </View>
    <View style={{
     backgroundColor: 'black'
    }}>
     <Image

      resizeMode="cover"
      style={{
       width: '100%',
       height: '100%',
       opacity: 0.6,
       zIndex: 1,


      }}
      source={require('./19.png')}
     />
    </View>



   </View>
   <View style={{
    width: '100%',
    flex: 4,
    //backgroundColor: 'yellow'
   }}>
    <View style={{
     width: '100%',
     height: 40,
     backgroundColor: 'white',
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
    }}>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 13
     }}>
      회원정보
     </Text>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 13
     }}>
      주문내역
     </Text>
     <Text style={{
      fontFamily: 'Rn',
      fontSize: 13
     }}>
      고객센터
     </Text>

    </View>
    <View style={{
     width: '100%',
     height: 40,
     //backgroundColor: 'pink',
     display: 'flex',
     alignItems: 'flex-end',
     justifyContent: 'center',
     borderWidth: 0.6,
     borderTopColor: 'transparent',
     borderRightColor: 'white',

     borderLeftColor: 'white',

    }}>
     <View style={{
      width: 70,
      height: '60%',
      marginRight: 10,
      backgroundColor: 'black',
      borderWidth: 0.5,
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between'


     }}>
      <Text style={{
       fontFamily: 'Rn',
       fontSize: 13,
       color: 'white'
      }}> 배송중</Text>
      <AntDesign name="caretdown" style={{
       margin: 5
      }} size={14} color="white" />
     </View>

    </View>
    <ScrollView>

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
        주문일 1998 05 28
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
        <View style={{
         width: 80,
         height: '80%',
         backgroundColor: 'black',
         alignSelf: 'center',
         margin: 10
        }}>
         <Image

          resizeMode="cover"
          style={{
           width: '100%',
           height: '100%',
           //opacity: 0.6,
           //zIndex: 1,


          }}
          source={require('./28.png')}
         />
        </View>
        <View style={{
         width: 80,
         height: '80%',
         backgroundColor: 'black',
         alignSelf: 'center',
         margin: 10
        }}>
         <Image

          resizeMode="cover"
          style={{
           width: '100%',
           height: '100%',
           //opacity: 0.6,
           //zIndex: 1,


          }}
          source={require('./28.png')}
         />
        </View>

        <Entypo name="dots-three-vertical" style={{
         alignSelf: 'center',
         display: 'flex'
        }} size={25} color="black" />
       </ScrollView>

      </View>
     </View>


    </ScrollView>

   </View>

  </View >
 )

}
My_page.navigationOptions = () => {
 return {
  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center',
   fontSize: 13
  }}>  </Text>,
 };
};
export default My_page;
