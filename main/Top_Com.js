/*

 
                  */


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

const Top_Com = function ({ navigation, data }) {
  const token = useSelector((state) => state.token.token);
  const coco_text = function () {
    if (data.product_name.length > 11) {
      return data.product_name.substr(0, 10) + "..."
    }
    else {
      return data.product_name
    }


  }

  return (

    <View>
      <View style={{
        width: Dimensions.get('window').width / 2.2,
        height: '30%',
        backgroundColor: '#EBEBEB',
        margin: 5
      }}>
        <TouchableOpacity onPress={() => {

          console.log(navigation)
          navigation.navigate('New_fifth', { data: data })

          /*
          var re_data = '';
          axios.get(`http://192.168.45.251:3000/product/${data._id}`)
     
           .then(function (response) {
            re_data = (response.data.data);
        navigation.navigate('fifth', { data: re_data })
     
     
           }).catch(function (error) {
            console.log(error);
           });
     
       
          //goto_size(re_data)
     
         }
       */
        }}

        >

          <View style={{
            width: '100%',
            height: 185,
            backgroundColor: '#EBEBEB'
          }}>
            <Image

              resizeMode="cover"
              style={{
                width: '100%',
                height: '70%'

              }}
              source={{ uri: data.product_image[0] }}
            />

            <View style={{
              width: 80,
              height: 20,
              backgroundColor: 'black',
              position: 'absolute',
              bottom: 55
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
              marginLeft: 10,
              marginTop: 10
            }}>
              {coco_text()}
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

        </TouchableOpacity>
      </View>
    </View >
  )

}


export default Top_Com;
