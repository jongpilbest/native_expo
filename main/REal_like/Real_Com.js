

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Button, Modal, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Size_Com from "../Size_Com";
import axios from "axios";
import { tokenAction } from "../../redux/token";
import SSize_Com from "../SSize__Com";
const Real_Com = function ({ data, gogo_delte }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [size, setsize] = useState(0);
  const [modalVisible2, setModalVisible2] = useState(false);
  const fifth_desig = function (data) {

    setsize(data);

  }
  const coco_text = function () {
    if (data.productId.product_name.length > 11) {
      console.log('여기좀')
      return data.productId.product_name.substr(0, 10) + "..."
    }
    else {
      return data.productId.product_name
    }


  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={
              {
                width: '100%',
                flex: 1,
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: 2,
              }

            }>

              <TouchableOpacity onPress={() =>
                setModalVisible2(!modalVisible2)}>
                <EvilIcons
                  style={{
                    marginRight: 5
                  }}
                  name="close" size={26} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{

              width: '100%',
              flex: 3,
            }}>
              <View>
                <Text style={{
                  fontFamily: 'Rn',
                  fontSize: 15,
                  marginLeft: 10,
                  marginTop: 10
                }}>
                  사이즈
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  flexDirection: 'row',
                  width: '100%',
                  height: '70%',


                }}
              >
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  style={{
                    marginLeft: 10
                  }}
                  horizontal={true}>
                  {
                    data.productId.size.map((el, index) => {
                      return <SSize_Com

                        size={size}
                        goto_size={(data) => fifth_desig(data)} key={index} data={el}>
                      </SSize_Com>
                    })

                  }
                </ScrollView>
              </View>

            </View>


            <View style={
              {
                width: '100%',
                flex: 1,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
              }}>
              <TouchableOpacity onPress={() => {
                console.log(data.productId._id, size, data.productId.price, '체크')
                axios.post('http://192.168.45.251:3000/cart', {
                  "_id": data.productId._id,
                  "size": size,
                  "price": data.productId.price
                },
                  {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  }

                )
                  //성공시 then 실행
                  .then(function (response) {
                    var change = [...response.data.item];
                    console.log(response.data, '카트더할때 가격 차이좀')

                    var aa = [];
                    change.map((el, index) => {
                      el.size.map((ev, index) => {
                        var new_item = {
                          productId: el,
                          size: {
                            size: ev.size,
                            quantity: ev.quantity,
                            opacity: ev.opacity
                          }

                        }
                        aa.push(new_item)
                      })
                    })


                    dispatch(tokenAction.setuser(aa))

                    dispatch(tokenAction.setprice(response.data.price))
                    setModalVisible2(!modalVisible2);

                  }).catch(function (error) {


                  });

                axios.post('http://192.168.45.251:3000/delete_Like', {
                  "id": data.productId._id
                }, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })

                  .then(function (response) {
                    console.log(response.data.data)

                    dispatch(tokenAction.setlike(response.data.data))

                  }).catch(function (error) {
                    console.log('error??', error)
                    console.log(error.response.data);
                  });


              }}>
                <View style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  position: 'relative',

                  flexDirection: 'row',
                  // justifyContent: 'space-between'
                }}>


                  <View style={{
                    width: '90%',
                    alignSelf: 'center'
                  }}>
                    <Text style={{
                      fontFamily: 'Rn',
                      fontSize: 15,
                      marginLeft: 5
                      //fontWeight: 'bold'
                    }}>
                      장바구니 추가
                    </Text>
                  </View>
                  <View style={{
                    alignSelf: 'center'
                  }}>
                    <EvilIcons
                      style={{
                        marginRight: 10


                      }}
                      name="cart" size={24} color="black" />
                  </View>


                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal >

      <View style={{
        width: '90%',
        height: Dimensions.get('window').height / 5,
        backgroundColor: '#F0F0F0',
        margin: 5,
        alignSelf: 'center',
        flexDirection: 'row'
      }}>

        <View style={{
          width: '48%',
          height: '100%',

        }}>

          <Image


            style={{
              width: '100%',
              height: '100%',
              // resizeMode: 'stretch'

            }}
            source={{ uri: data.productId.product_image[0] }}
          />
        </View>
        <View style={{
          width: '50%',
          height: '100%',

          flexDirection: 'column',
          position: 'relative'
        }}>


          <View style={{
            width: '100%',

          }}>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 14,
              marginLeft: 5,
              marginTop: 10
            }}>  {coco_text()}</Text>
          </View>

          <Text style={{
            fontFamily: 'Rn',
            color: '#808080',
            fontSize: 11,
            marginLeft: 10
          }}>
            {data.productId.sebucategori.toString().replace(',', '*')}

          </Text>

          <View>
          </View>
          <View style={{
            width: '90%',
            height: 19,
            //backgroundColor: 'black',

            flexDirection: 'row',
            margin: 2
          }}>

            <View style={
              {
                width: '60%',
                height: '100%',
                backgroundColor: 'black',
                marginLeft: 10,
                display: 'flex',
                justifyContent: 'center'


              }
            }>
              <Text style={{
                fontFamily: 'Rn',
                color: 'white',
                fontSize: 13,
                marginTop: 'auto',
                marginBottom: 'auto',

              }}> ₩ {data.productId.price}</Text>

            </View>

          </View>
          <View style={
            {
              width: '90%',
              height: '50%',
              //backgroundColor: 'white',
              marginLeft: 10,
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'

            }
          }>
            <TouchableOpacity onPress={() => {
              setModalVisible2(!modalVisible2);

            }}>
              <View style={{
                width: '95%',
                height: 30,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontFamily: 'Rn',
                  fontSize: 12,
                  marginLeft: 5,
                  //fontWeight: 'bold'
                }}>
                  장바구니 추가
                </Text>
                <EvilIcons name="cart" size={24} color="black" />
              </View>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  )

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%'
  },
  modalView: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',

    width: '100%',
    height: '23%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    color: 'white',
    fontFamily: 'Rn',
    fontSize: 13,

  },

});

export default Real_Com;
