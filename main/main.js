

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"

import axios from "axios";
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Main_com from "./Main_com";
import { HeaderTitle } from "react-navigation-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from "../redux/token";
import tt from "./Token";
function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 30, marginLeft: 10 }}
      source={require('../assets/logo.png')}
    />
  );
}



const main = function ({ navigation }) {
  const dispatch = useDispatch();
  const [football, setfootball] = useState([]);
  const [winter, setwinter] = useState([]);


  const token = useSelector((state) => state.token.token);



  useEffect(() => {
    dispatch(tokenAction.settoken(''));
  }, [])
  const getmain_football = function () {
    axios.get('http://192.168.45.191:3000/fifa', {
    })
      //성공시 then 실행
      .then(function (response) {

        setfootball(response.data);

      }).catch(function (error) {

        console.log(error.response.data);
      });

  }

  const getmain_winterl = function () {
    axios.get('http://192.168.45.191:3000/winter', {

    })
      //성공시 then 실행
      .then(function (response) {

        setwinter(response.data);

      }).catch(function (error) {

        console.log(error.response.data);
      });

  }
  useEffect(() => {


    getmain_football();
    getmain_winterl();


  }, [])

  const gogo = function () {
    navigation.navigate('login');
  }

  const [ref, setRef] = useState(null);

  // const listRef_2 = useRef(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  var hee = Dimensions.get('window').height;

  const autoScroll = function () {
    console.log(contentVerticalOffset, hee)
    if (contentVerticalOffset > 50 && contentVerticalOffset < 100) {
      ref.scrollTo({ x: 0, y: hee, animated: false })

    }
    if (contentVerticalOffset < hee && contentVerticalOffset > hee / 2) {
      console.log('??')
      ref.scrollTo({ x: 0, y: 0, animated: false })
      //setcount(1);
    }

  }
  //console.log(contentVerticalOffset, Dimensions.get('window').height)
  return (

    <View style={{
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,


    }}>
      <ScrollView
        ref={(ref) => {
          setRef(ref);
        }}
        onScroll={event => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);

          autoScroll();

        }}
      >


        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          backgroundColor: 'blue',

        }}>
          <Image

            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%'

            }}
            source={require('../assets/Image_2/1.png')}
          />

          <View style={{
            backgroundColor: 'black',
            width: 110,
            height: 35
            , position: 'absolute',
            top: '70%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              wordcup
            </Text>
          </View>
          <View style={{
            backgroundColor: 'black',
            width: 160,
            height: 35
            , position: 'absolute',
            top: '81%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              premium shoes
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          //backgroundColor: 'pink',
          flex: 1
        }}>

          <View style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              fontSize: 25,
              marginLeft: 10,
              //backgroundColor: 'blue'
            }}>
              FIFA Word Cup
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 0
            }}>
              피파 월드컵
            </Text>

          </View>
          <View style={{
            width: '100%',
            flex: 4
          }}>


            <ScrollView
              showsHorizontalScrollIndicator={false}

              horizontal={true}>

              {
                football.map((el, index) => {

                  return <Main_com
                    total={el}
                    navigation={navigation}
                    key={index}></Main_com>
                })
              }
            </ScrollView>

          </View>


        </View >

        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          backgroundColor: 'blue',
          flex: 1
        }}>
          <Image

            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%'

            }}
            source={require('../assets/Image_2/4.png')}
          />

          <View style={{
            backgroundColor: 'black',
            width: 110,
            height: 35
            , position: 'absolute',
            top: '70%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              This is
            </Text>
          </View>
          <View style={{
            backgroundColor: 'black',
            width: 160,
            height: 35
            , position: 'absolute',
            top: '81%',
            margin: 10,
            display: 'flex',
            justifyContent: 'flex-start'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              color: 'white',
              fontSize: 20,
              marginLeft: 5,
              textAlignVertical: 'top'

            }}>
              Your Season
            </Text>
          </View>
        </View>
        <View style={{
          width: '100%',
          height: Dimensions.get('window').height / 2,
          //backgroundColor: 'pink',
          flex: 1
        }}>

          <View style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white'
          }}>

            <Text style={{
              fontFamily: 'Rn',
              fontSize: 25,
              marginLeft: 10,
              //backgroundColor: 'blue'
            }}>
              Winter season
            </Text>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 0
            }}>
              겨울 시즌
            </Text>

          </View>
          <View style={{
            width: '100%',
            flex: 4
          }}>


            <ScrollView
              showsHorizontalScrollIndicator={false}

              horizontal={true}>

              {
                winter.map((el, index) => {

                  return <Main_com
                    total={el}
                    navigation={navigation}
                    key={index}></Main_com>
                })
              }


            </ScrollView>

          </View>


        </View>

      </ScrollView >
    </View >
  )

}

main.navigationOptions = ({ navigation }) => {

  return {
    headerLeft: (props) => <LogoTitle {...props} />,
    title: '',
    headerRight: () => {

      return <View style={{
        flexDirection: 'row'
      }}>
        <Feather
          style={{
            margin: 10
          }}
          name="search" size={24} color="black" />
        <TouchableOpacity onPress={() => {

          navigation.navigate('Login')
          /*
          if (tt() != '') {
            navigation.navigate('My_page')
          }
          else {
            navigation.navigate('Login')
        }
        */



        }}>

          <Feather style={{
            margin: 10
          }} name="user" nav={navigation} size={24} color="black" />
        </TouchableOpacity>


      </View>




    }


  };
};
export default main;
