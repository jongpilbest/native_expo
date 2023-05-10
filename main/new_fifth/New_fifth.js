

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, Modal, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
//import { ScrollView } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import Size_Com from "../Size_Com";
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from "react-native-gesture-handler";
import New_Coms from "./New_Coms";
import { tokenAction } from "../../redux/token";
const New_fifth = function ({ navigation }) {
  const data = navigation.getParam('data');
  const [size, setsize] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [heart, setheart] = useState(0);
  const [ssize, ssetsize] = useState(data.size);

  const cart = useSelector((state) => state.token.change);

  useEffect(() => {


    axios.get(`http://192.168.45.89:3000/product_Size/${data._id}`,
    )
      .then(function (response) {
        ssetsize(response.data.data);
        console.log(ssize, '뭐요')


      }).catch(function (error) {

        console.log(error);
      });




  }, [cart]);




  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);












  useEffect(() => {
    axios.get(`http://192.168.45.89:3000/like_total_lost/${data._id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    )
      .then(function (response) {
        const heart = response.data.data;
        console.log(heart, '여기?');
        setheart(heart);


      }).catch(function (error) {

        console.log(error);
      });

  }, []);





  const go_heart = function () {
    setheart(!heart);

    console.log('검은색?');

    axios.post('http://192.168.45.89:3000/like', {
      id: data._id
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    ).then(function (response) {

      dispatch(tokenAction.setlike(response.data.data))

    }).catch(function (error) {

      console.log(error);
    });

  }
  const gogo_heart = function (id) {

    if (heart == 1) {
      return <FontAwesome
        style={{ margin: 13 }}
        name="heart" size={22} color="black" />
    }
    else {

      return <FontAwesome
        style={{ margin: 13 }}
        name="heart-o" size={22} color="black" />

    }

  }
  const fifth_desig = function (data) {
    setsize(data);
    console.log(size, '뎅티')
  }


  const go_cart = function () {

    const index_size = data.size.findIndex(el => {
      return el[0] == size
    })
    console.log(index_size)
    if (index_size != -1 && data.size[index_size][1] > 0) {


      return <TouchableOpacity onPress={() => {

        setModalVisible(!modalVisible)

        axios.post('http://192.168.45.89:3000/cart', {
          "_id": data._id,
          "size": size,
          "price": data.price
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


          }).catch(function (error) {


          });
      }}>


        <Text style={{
          fontFamily: 'Rn',
          fontSize: 13,
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          color: 'black'
        }}>
          장바구니
        </Text>
      </TouchableOpacity>
    }
    else {

      return <Text style={{
        fontFamily: 'Rn',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'black'
      }}>
        장바구니
      </Text>

    }

  }
  return (

    <View style={{
      width: Dimensions.get('window').width,
      //backgroundColor: '#F0F0F0',
      borderColor: 'white',
      borderWidth: 2,
      // height: Dimensions.get('window').height * 2,

    }}>


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {

            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={
                {
                  width: '100%',
                  height: '25%',
                  backgroundColor: 'black',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                }

              }>
                <Text style={styles.modalText}>장바구니에 상품이 추가됐습니다</Text>
                <TouchableOpacity onPress={() =>
                  setModalVisible(!modalVisible)}>
                  <EvilIcons name="close" size={26} color="white" />
                </TouchableOpacity>
              </View>


              <View style={
                {
                  width: '100%',
                  height: '100%',

                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10


                }

              }>
                <View style={{
                  width: '40%',
                  height: '60%',
                  // backgroundColor: 'yellow'
                }}>
                  <Image


                    style={{
                      width: '100%',
                      resizeMode: 'cover',
                      //transform: [{ scale: 0.5 }],
                      height: '100%'
                      , backgroundColor: '#EBEEEF',

                    }}
                    source={{ uri: data.product_image[0] }}
                  />
                </View>
                <View style={{
                  width: '55%',
                  height: '60%',

                  flexDirection: 'column'
                  ,
                  justifyContent: 'center'
                }}>
                  <View style={{
                    width: '100%',
                    height: '22%',

                    margin: 3
                  }}>
                    <Text style={{
                      fontFamily: 'Rn',
                      fontSize: 13
                    }}>
                      {data.product_name}
                    </Text>

                  </View>
                  <View style={{
                    width: '50%',
                    height: '20%',

                    margin: 3
                  }}>
                    <Text style={{
                      fontFamily: 'Rn',
                      fontSize: 12
                    }}>
                      {size}
                    </Text>


                  </View>
                  <View style={{
                    width: '50%',
                    height: '20%',
                    backgroundColor: 'black',
                    margin: 3
                  }}>
                    <Text style={{
                      fontFamily: 'Rn',
                      fontSize: 12,
                      color: 'white',
                      marginLeft: 10

                    }}>
                      {`₩ ${data.price}원`}
                    </Text>

                  </View>


                </View>

              </View>
            </View>
          </View>
        </Modal>

      </View>


      <ScrollView>

        <View style={{
          width: '100%',
          height: Dimensions.get('window').height * 0.71,
          backgroundColor: 'white',

        }}>
          <ScrollView
            nestedScrollEnabled={true}>

            {

              data.product_image.map((el, index) => {
                return <New_Coms
                  data={el}
                  navigation={navigation}
                  key={index}></New_Coms>
              })
            }

          </ScrollView>


        </View>
        <View style={{
          height: Dimensions.get('window').height * 0.35,


          width: Dimensions.get('window').width,
          backgroundColor: 'white',
          // backgroundColor: 'yellow'
        }}>
          <View style={{
            width: '100%',
            height: Dimensions.get('window').height * 0.15,
            position: 'relative',

            display: 'flex',


          }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: '40%',

            }}>



              <View style={{
                width: '100%',
                height: '100%'
                ,
                display: 'flex',
                justifyContent: 'center',

              }}>
                <View style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <View style={{
                    width: '85%',
                    height: '100%'
                  }}>
                    <Text style={{
                      fontFamily: 'Rn',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginLeft: 10,
                      marginTop: 'auto',
                      marginBottom: 'auto'
                    }}>
                      {data.product_name}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => go_heart()}>
                      <View>
                        {gogo_heart()}
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </View>
            <View style={{
              width: '100%',
              height: '33%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 15,
                marginLeft: 10
              }}>
                {data.sebucategori.toString().replace(',', '*')}
              </Text>
            </View>
            <View style={{
              width: '100%',
              height: '33%',
            }}>
              <View style={{
                width: Dimensions.get('window').width * 0.3,
                height: '80%',
                backgroundColor: 'black',
                marginLeft: 10,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontFamily: 'Rn',
                  fontSize: 15,

                  color: 'white',
                  textAlign: 'center'
                }}>
                  {`₩ ${data.price}`}
                </Text>

              </View>

            </View>

          </View>


          <View style={{
            width: '100%',


            display: 'flex',
            justifyContent: 'center',

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
              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                  marginLeft: 10
                }}
                horizontal={true}>



                {
                  ssize.map((el, index) => {
                    return <Size_Com
                      ima={ssize}
                      st_p_cart={(data) => stop_Cart(data)}
                      size={size}
                      goto_size={(data) => fifth_desig(data)} key={index} data={el}>
                    </Size_Com>
                  })

                }


              </ScrollView>
            </View>

          </View>
          <View style={{
            width: '100%',
            backgroundColor: 'black',
            marginTop: 20,
            height: '14%',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
          }}>
            <View style={{
              width: '50%',
              height: '100%',
              backgroundColor: 'black',

              display: 'flex',

            }}>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                color: 'white'
              }}>
                구매하기
              </Text>

            </View>
            <View style={{
              width: '50%',
              height: '100%',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {go_cart()

              }
            </View>
            <View>

            </View>

          </View>

        </View>

      </ScrollView >
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
    height: '25%',

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
New_fifth.navigationOptions = ({ navigation }) => {
  return {

    title: '',



  };
};
export default New_fifth;