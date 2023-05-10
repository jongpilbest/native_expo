

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, Modal, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import Lii_Com from "./Lii_Com";
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { tokenAction } from "../../redux/token";
const Like_List = function ({ navigation }) {

  const token = useSelector((state) => state.token.token);
  const cart = useSelector((state) => state.token.cart);
  const change = useSelector((state) => state.token.cart_price);
  var dt = new Date();
  var str_v = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
  console.log(str_v)


  const price_total = useSelector((state) => state.token.cart_price);
  const dispatch = useDispatch();
  const [price, setprice] = useState(price_total);

  const [like, setlike] = useState([]);
  const go_del = function (data, size, price) {
    axios.post('http://192.168.45.89:3000/delete_Cart', {
      id: data,
      size: size,
      price: price
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      //성공시 then 실행
      .then(function (response) {
        var change = [...response.data.item];
        setprice(response.data.price);
        console.log('지울때 금액', setprice);


        var aa = [];
        change.map((el, index) => {
          el.size.map((ev, index) => {
            console.log('지울때 여기 들어가야짐');
            if (ev.opacity == 0.6) {
              console.log(ev.opacity, '체킥아웃')
              setprice((data) => data - (el.productId.price * ev.quantity));
              dispatch(tokenAction.setprice(price))
              //console.log(change, '가격비교좀')
            }
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
        console.log(aa);
        //setgood(aa);
        dispatch(tokenAction.setuser(aa));
        dispatch(tokenAction.setprice(response.data.price))

      }).catch(function (error) {

        console.log(error.response.data);
      });


  }

  const server_suro = function (fir, sec, thir, four, six) {

    axios.post('http://192.168.45.89:3000/suro', {
      "_id": fir,
      "size": sec,//원래 데이터 사이즈
      "quantity": thir,
      "origin_price": four,
      "nomal_price": six

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
        console.log(response.data, '변화 수량 확인 데이터 ')
        setprice(response.data.price);
        var aa = [];
        change.map((el, index) => {
          el.size.map((ev, index) => {
            if (ev.opacity == 0.6) {
              setprice((data) => data - (el.productId.price * ev.quantity));
              dispatch(tokenAction.setprice(price))
              //console.log(change, '가격비교좀')
            }
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
        setlike(aa);
        dispatch(tokenAction.setprice(response.data.price))
        dispatch(tokenAction.setuser(aa));
      }).catch(function (error) {

      });

  }


  const opa_function = async function () {

    await axios.post(`http://192.168.45.89:3000/Cart_quantity`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(function (response) {
        console.log(response.data, '카트차이나니')
        setprice(response.data.price);
        var change = [...response.data.item];
        var aa = [];
        change.map((el, index) => {
          el.size.map((ev, index) => {

            if (ev.opacity == 0.6) {
              setprice((data) => data - (el.productId.price * ev.quantity));
              dispatch(tokenAction.setprice(price))
              //console.log(change, '가격비교좀')
            }
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
        dispatch(tokenAction.setuser(aa));
        setlike(aa);


      }).catch(function (error) {

      });

  }

  useEffect(() => {

  }, [])



  useEffect(() => {
    console.log('카트변화?', cart);
    setlike(cart);
  }), [cart];




  useEffect(() => {
    setprice(price_total)
  }, [price_total])



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
        height: Dimensions.get('window').height * 0.76,
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
        <ScrollView>
          <View style={{
            backgroundColor: 'white',
            flexDirection: "row",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 5,
            //backgroundColor: 'pink'


            //flexWrap: "wrap",
            display: 'flex'
          }}>

            <View style={{
              width: '100%',
              height: '100%'
            }}>
              {

                like.map((el, inex) => {

                  return <Lii_Com key={inex}
                    suro_parent={(fir, sec, thir, four, six) => server_suro(fir, sec, thir, four, six)}
                    count_price={(fir, second) => countt(fir, second)}
                    gogo_delte={(data, size, price) => go_del(data, size, price)}
                    data={el}></Lii_Com>
                })
              }
            </View>


          </View>
        </ScrollView>
      </View >
      <View style={{
        width: Dimensions.get('window').width,
        backgroundColor: '#F0F0F0',
        height: Dimensions.get('window').height / 9,


      }}>
        <View style={{

          flexDirection: 'row',
          display: 'flex',
          height: '50%',
          alignItems: 'center',

          alignSelf: 'center',

        }}>
          <View style={{
            width: '90%',
            flexDirection: 'row'
            , alignContent: 'center',
            justifyContent: 'space-between',
          }}>
            <Text style={{
              fontFamily: 'Rn',

              fontSize: 15
            }}> 총 주문 금액</Text>
            <Text style={{
              fontFamily: 'Rn',

              fontSize: 15
            }}>{price}</Text>

          </View>



        </View>



        <View style={{

          flexDirection: 'row',
          display: 'flex',
          height: '50%',
          backgroundColor: 'black',
          width: '100%',
          justifyContent: 'center'


        }}>
          <TouchableOpacity onPress={async () => {

            await axios.post(`http://192.168.45.89:3000/Jumon`, {
              "ddd": str_v,
              "hey": 1,


            }, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
              .then(function (response) {

                console.log(response.data, '이게 뭐요');



                dispatch(tokenAction.setjumon(response.data));













                dispatch(tokenAction.setuser([]))
                dispatch(tokenAction.setprice(0));
                dispatch(tokenAction.setchange(1));
                setprice(0);



              }).catch(function (error) {

              });


          }}>

            <View style={{

              marginRight: 'auto',
              marginLeft: 'auto',
              height: '100%',
              alignSelf: 'center',
              width: '75%',
              backgroundColor: 'black',

              display: 'flex',
              flexDirection: 'row'
              , justifyContent: 'space-between',

            }}>

              <Text style={{
                fontFamily: 'Rn',
                marginTop: 'auto',
                marginBottom: 'auto',
                fontSize: 15,
                color: 'white'
              }}>
                결제 하기
              </Text>


              <AntDesign
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                name="arrowright" size={24} color="white" />
            </View>
          </TouchableOpacity>

        </View>


      </View>





    </View >
  )

}
Like_List.navigationOptions = () => {
  return {
    title: <Text style={{
      fontFamily: 'Rn',
      textAlign: 'center',
      fontSize: 15
    }}> 장바구니 </Text>,

  };
};
export default Like_List;