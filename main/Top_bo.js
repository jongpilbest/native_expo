

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Top_Com from "./Top_Com";
import axios from 'axios';

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 30, marginLeft: 10 }}
      source={require('../assets/logo.png')}
    />
  );
}

const Top_bo = function ({ navigation }) {
  const [shoes, setshoes] = useState([]);
  const [apply, setapply] = useState([]);
  const [sup, setsup] = useState([]);
  const goto_shose = function () {


    axios.get('http://192.168.45.89:3000/woman_shoes', {

    })
      //성공시 then 실행
      .then(function (response) {

        setshoes(response.data.data);

      }).catch(function (error) {

        console.log(error.response.data);
      });


  }

  const goto_suppl = function () {


    axios.get('http://192.168.45.89:3000/woman_apparel', {

    })
      //성공시 then 실행
      .then(function (response) {

        setapply(response.data.data);

      }).catch(function (error) {

        console.log(error.response.data);
      });


  }

  const goto_apply = function () {


    axios.get('http://192.168.45.89:3000/woman_sup', {

    })
      //성공시 then 실행
      .then(function (response) {

        setsup(response.data.data);

      }).catch(function (error) {

        console.log(error.response.data);
      });


  }

  useEffect(() => {

    goto_shose();
    goto_suppl();
    goto_apply();


  }, [])




  return (
    <ScrollView>
      <View style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 1.6,

      }}>

        <View style={{
          width: '100%',
          backgroundColor: 'white',
          height: 50,

          // justifyContent: 'space-between'
        }}>


          <View style={{
            width: '70%',
            height: 30,
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'pink',
            flexDirection: 'row',
            marginTop: 'auto',
            marginBottom: 'auto'
          }}>
            <Text
              style={{
                fontFamily: 'Rn',
                fontSize: 16,

                textDecorationLine: 'underline',
              }}
            > Woman</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Top_men')
            }}>
              <Text
                style={{
                  fontFamily: 'Rn',
                  fontSize: 16
                }}
              > Men</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('Top_kid')
            }}>

              <Text
                style={{
                  fontFamily: 'Rn',
                  fontSize: 16
                }}
              > Kids</Text>
            </TouchableOpacity>
          </View>



        </View>

        <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        }}>
          <View style={{
            width: '100%',
            height: Dimensions.get('window').height / 2.5,
            //backgroundColor: 'black',
            alignItems: 'center',

          }}>
            <Image

              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%'

              }}
              source={require('../assets/Image_2/34.png')}
            />
          </View>
          <View style={{
            width: '100%',
            height: Dimensions.get('window').height / 4,
            //backgroundColor: 'yellow'
          }}>
            <View style={{
              width: '100%',
              //backgroundColor: 'blue',
              height: 60,
              flexDirection: 'row',
              // justifyContent: 'space-between'
            }}>

              <View style={{
                width: '70%',
                height: 30,
                backgroundColor: 'white',
                flexDirection: 'row'
                , margin: 10,
                justifyContent: 'space-between'
              }}>
                <TouchableOpacity onPress={() => {

                  axios.get('http://192.168.45.89:3000/woman_shoe_cegori',

                    { withCredentials: true })
                    //성공시 then 실행
                    .then(function (response) {
                      console.log(response.data);
                      navigation.navigate('Categori', { data: response.data.data })


                    }).catch(function (error) {

                      console.log(error.response.data);
                    });

                }

                }>


                  <Text
                    style={{
                      fontFamily: 'Rn',
                      fontSize: 16
                    }}
                  >Shoes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {

                  axios.get('http://192.168.45.89:3000/woman_apparel_cegori',

                    { withCredentials: true })
                    //성공시 then 실행
                    .then(function (response) {
                      console.log(response.data);
                      navigation.navigate('Categori', { data: response.data.data })


                    }).catch(function (error) {

                      console.log(error.response.data);
                    });

                }

                }>

                  <Text
                    style={{
                      fontFamily: 'Rn',
                      fontSize: 16
                    }}
                  > Apparel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {

                  axios.get('http://192.168.45.89:3000/woman_yo',

                    { withCredentials: true })
                    //성공시 then 실행
                    .then(function (response) {
                      console.log(response.data);
                      navigation.navigate('Categori', { data: response.data.data })


                    }).catch(function (error) {

                      console.log(error.response.data);
                    });

                }

                }>
                  <Text
                    style={{
                      fontFamily: 'Rn',
                      fontSize: 16
                    }}
                  > Supplies</Text>
                </TouchableOpacity>

              </View>





            </View>

            <View style={{
              width: '100%',
              height: 80,
              //backgroundColor: 'pink'
            }}>

              <Text style={{
                fontFamily: 'Rn',
                fontSize: 25,
                marginLeft: 10,
                //backgroundColor: 'blue'
              }}>
                Shoes
              </Text>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                marginLeft: 10,
                marginTop: 0
              }}>
                신발
              </Text>

            </View>
            <View style={{
              width: '100%',
              height: Dimensions.get('window').height / 4,
              //backgroundColor: 'yellow'
            }}>

              <ScrollView
                style={{
                  width: '100%',
                  //backgroundColor: 'black',
                  height: 50
                }}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                horizontal={true}>

                <View style={{
                  width: Dimensions.get('window').width * 2,
                  height: '100%',
                  flexDirection: 'row',
                  marginLeft: 5,
                  marginTop: 5,
                  backgroundColor: 'white'
                }}>
                  {
                    shoes.map((el, index) => {
                      return <Top_Com
                        navigation={navigation}
                        data={el} key={index}></Top_Com>
                    })
                  }
                </View>


              </ScrollView>

            </View>
            <View style={{
              width: '100%',
              height: 80,
              // backgroundColor: 'pink'
            }}>

              <Text style={{
                fontFamily: 'Rn',
                fontSize: 25,
                marginLeft: 10,
                //backgroundColor: 'blue'
              }}>
                Apparel
              </Text>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                marginLeft: 10,
                marginTop: 0
              }}>
                의류
              </Text>

            </View>
            <View style={{
              width: '100%',
              height: Dimensions.get('window').height / 4,
              //backgroundColor: 'yellow'
            }}>

              <ScrollView
                style={{
                  // backgroundColor: 'black',
                  height: 50
                }}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                horizontal={true}>

                <View style={{
                  width: Dimensions.get('window').width * 2,
                  height: '100%',
                  flexDirection: 'row',
                  marginLeft: 5,
                  marginTop: 5,
                  backgroundColor: 'white'
                }}>

                  {
                    apply.map((el, index) => {
                      return <Top_Com
                        navigation={navigation}
                        data={el} key={index}></Top_Com>
                    })
                  }
                </View>


              </ScrollView>

            </View>

            <View style={{
              width: '100%',
              height: 80,
              //backgroundColor: 'pink'
            }}>

              <Text style={{
                fontFamily: 'Rn',
                fontSize: 25,
                marginLeft: 10,
                //backgroundColor: 'blue'
              }}>
                Supplies
              </Text>
              <Text style={{
                fontFamily: 'Rn',
                fontSize: 13,
                marginLeft: 10,
                marginTop: 0
              }}>
                용품
              </Text>

            </View>
            <View style={{
              width: '100%',
              height: Dimensions.get('window').height / 4,
              //backgroundColor: 'yellow'
            }}>

              <ScrollView
                style={{
                  // backgroundColor: 'black',
                  height: 50
                }}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                horizontal={true}>

                <View style={{
                  width: Dimensions.get('window').width * 2,
                  height: '100%',
                  flexDirection: 'row',
                  marginLeft: 5,
                  marginTop: 5,
                  backgroundColor: 'white'
                }}>
                  {
                    sup.map((el, index) => {
                      return <Top_Com
                        navigation={navigation}
                        data={el} key={index}></Top_Com>
                    })
                  }

                </View>


              </ScrollView>

            </View>
          </View>
        </View>


      </View >
    </ScrollView >
  )

}

Top_bo.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (props) => <LogoTitle {...props} />,
    title: '',
    headerRight: () => {

      return <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          axios.get('http://192.168.45.89:3000/add_product',

            { withCredentials: true })
            //성공시 then 실행
            .then(function (response) {

              console.log(성공하셨습니다);

            }).catch(function (error) {

              console.log(error.response.data);
            });
        }}>
          <Feather
            style={{
              margin: 10
            }}
            name="search" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>

          <Feather style={{
            margin: 10
          }} name="user" nav={navigation} size={24} color="black" />
        </TouchableOpacity>


      </View>




    }


  };
};
export default Top_bo;
