

import React, { useState, useContext, useEffect, useRef } from "react"
import {
  View, Image, TextInput, SafeAreaView, Modal, ScrollView,
  TouchableOpacity, Button, StyleSheet, Text, Dimensions
} from "react-native"
//import Main_Com from "./main_Com"
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { EvilIcons } from '@expo/vector-icons';
import Size_Com from "../Size_Com";
import { tokenAction } from "../../redux/token";
const Lii_Com = function ({ data, gogo_delte, suro_parent }) {
  const hh = ["1", "2", "3", "4", "5"]
  const [modalVisible2, setModalVisible2] = useState(false);
  const token = useSelector((state) => state.token.token);
  const [size, setsize] = useState(0);
  const [sura, setsura] = useState(data.productId.size);
  console.log(data, '엥?')
  const fifth_desig = function (data) {
    setsize(data)

  }
  console.log('사이즈좀 확인', data.size.size)

  const cart = useSelector((state) => state.token.change);

  useEffect(() => {


    axios.get(`http://192.168.45.89:3000/product_Size/${data.productId.productId._id}`,
    )
      .then(function (response) {

        var data_quent = response.data.data;


        var find_index = data_quent.findIndex((el) => el[0] == data.size.size);

        setsura(response.data.data[find_index][1]);


      }).catch(function (error) {

        console.log(error);
      });

    /*
    axios.get(`http://192.168.45.89:3000/product_Size/${data._id}`,
    )
      .then(function (response) {
        ssetsize(response.data.data);
        console.log(ssize, '뭐요')


      }).catch(function (error) {

        console.log(error);
      });
      */


  }, [cart]);








  const coco_text = function () {
    if (data.productId.productId.product_name.length > 11) {

      return data.productId.productId.product_name.substr(0, 10) + "..."
    }
    else {
      return data.productId.productId.product_name
    }


  }
  const opacity_func = function () {
    if (data.size.opacity == 0.6) {
      return 0.5
    }
    else {
      return 1;

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
                  수량
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
                    hh.map((el, index) => {
                      return <Size_Com
                        size={size}
                        ima={sura}
                        goto_size={(data) => fifth_desig(data)} key={index} data={el}>
                      </Size_Com>
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
                /// 여기서 부터 서버의 영
                suro_parent(data.productId.productId._id, data.size.size, size, data.productId.productId.price * data.size.quantity, data.productId.productId.price);


                setModalVisible2(!modalVisible2);
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
        flexDirection: 'row',
        opacity: opacity_func()
      }}>

        <View style={{
          width: '45%',
          height: '100%',

        }}>

          <Image

            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%'

            }}
            source={{ uri: data.productId.productId.product_image[0] }}
          />
        </View>
        <View style={{
          width: '60%',
          height: '100%',
          //backgroundColor: 'pink',
          flexDirection: 'column',
          position: 'relative'
        }}>



          <Text style={{
            fontFamily: 'Rn',
            fontSize: 14,
            marginLeft: 10,
            marginTop: 10
          }}> {coco_text()}</Text>
          <Text style={{
            fontFamily: 'Rn',
            color: '#808080',
            fontSize: 11,
            marginLeft: 10
          }}>
            {data.productId.productId.sebucategori.toString().replace(',', '*')}
          </Text>
          <View style={{
            width: '90%',
            height: 19,
            //backgroundColor: 'yellow',
            // justifyContent: 'space-between',
            flexDirection: 'row',
            margin: 2
          }}>
            <View style={{
              width: '30%',
              height: '100%',

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
                //alignItems: 'flex-end'
              }
            }>
              <View>
                <Text style={{
                  textAlign: 'right'
                }}>
                  {data.size.size}
                </Text>
              </View>
              <View>

              </View>
            </View>

          </View>
          <View style={{
            width: '90%',
            height: 19,
            // backgroundColor: 'yellow',
            // justifyContent: 'space-between',
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
              <TouchableOpacity onPress={() => {
                setModalVisible2(!modalVisible2);
              }}>
                <Text>
                  {data.size.quantity}
                </Text>
              </TouchableOpacity>

            </View>

          </View>

          <View>
          </View>
          <View style={{
            width: '90%',
            height: 19,
            //backgroundColor: 'black',
            // justifyContent: 'space-between',
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
              }}> {`₩ ${data.productId.productId.price}`}</Text>

            </View>

          </View>
          <View style={{
            width: '90%',
            //backgroundColor: 'white',
            margin: 5,
            display: 'flex',


          }}>
            <View style={{
              width: '15%',
              // backgroundColor: 'pink',
              alignSelf: 'flex-end',

            }}>
              <TouchableOpacity onPress={() => {

                //->여기서 부터 axios 쿼리 불러  console.log('오류나냐?')




                gogo_delte(data.productId.productId._id, data.size.size, data.size.quantity * data.productId.productId.price);


              }}>

                <Feather style={{

                }} name="x" size={22} color="black" />

              </TouchableOpacity>
            </View>

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


export default Lii_Com;