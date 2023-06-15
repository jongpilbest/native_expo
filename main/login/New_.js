import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios';

const New_ = function ({ navigation, state }) {
  const [title, setTitle] = useState(false);
  const [title2, setTitle2] = useState(false);
  const [title3, setTitle3] = useState(false);
  const [title4, setTitle4] = useState(false);
  const [first, setfirst] = useState(false);
  const [ffirst, setffirst] = useState(false);
  const [ssecond, setssecond] = useState(false);
  const [second, setsecond] = useState(false);
  const [count, setcount] = useState(0);
  const [third, setthird] = useState(0);

  const checkuser = function (ar) {
    console.log(title)
    if (ar == 1) {
      if (!title) {
        setffirst(1);
      }
      else {
        axios.post('http://192.168.45.236:3000/signinname', {
          "name": title
        }, { withCredentials: true })
          //성공시 then 실행
          .then(function (response) {

            setfirst(response.data);

          }).catch(function (error) {

            console.log(error.response.data);
          });
      }
    }
    if (ar == 2) {
      if (!title2) {
        setssecond(1);
      }
      axios.post('http://192.168.45.236:3000/signinemail', {
        "email": title2
      }, { withCredentials: true })

        .then(function (response) {

          setsecond(response.data);

        }).catch(function (error) {
          console.log('error??', error)
          console.log(error.response.data);
        });

    }
    if (ar == 3) {

      if (title3 != title4) {
        setthird(1);
      }
      else {
        setthird(0);
      }
    }

  }
  const check_icon = function () {
    if (count == 0) {
      setcount(1);
    }
    else if (count == 1) {
      setcount(0)
    }
  }
  return (
    <View style={{
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      display: 'flex',
      justifyContent: 'center',

    }}>
      <View style={{
        width: '100%',
        flex: 2,
        // backgroundColor: 'blue'
      }}>
        <View style={{
          width: '100%',
          flex: 0.2,
          backgroundColor: 'white'
        }}>

        </View>
        <View style={{
          width: '100%',
          flex: 1,
          //backgroundColor: 'pink'
        }}>
          <Text style={{
            fontFamily: 'Rn',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10
          }}> 회원이름 </Text>
          <TextInput
            style={{
              width: '90%',
              margin: 13,
              fontSize: 19,
              backgroundColor: 'white',
              height: 40,
              borderBottomColor: 'black',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              borderWidth: 0.9
            }}
            value={title}
            onChangeText={(text) => {
              setfirst(0);
              setffirst(0);
              setTitle(text)
            }}
            autoCorrect
            onSubmitEditing={() => checkuser(1)}
          //onSubmitEditing={() => console.log("onSubmitEditing")}
          />
          {
            first == 1 && <View style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              height: 20,
              //backgroundColor: 'yellow',


            }}>
              <Text style={{
                fontFamily: 'Rn',
                textAlign: 'right',
                color: 'red',
                fontSize: 12
              }}>이미 존재하는 회원입니다</Text>
            </View>

          }
          {
            ffirst == 1 && <View style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              height: 20,
              //backgroundColor: 'yellow',


            }}>
              <Text style={{
                fontFamily: 'Rn',
                textAlign: 'right',
                color: 'red',
                fontSize: 12
              }}>회원이름이 공백입니다</Text>
            </View>
          }



          <Text style={{
            fontFamily: 'Rn',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10
          }}> 이메일주소 </Text>
          <TextInput
            style={{
              width: '90%',
              margin: 15,
              fontSize: 19,
              backgroundColor: 'white',
              height: 40,
              borderBottomColor: 'black',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              borderWidth: 0.9
            }}
            value={title2}
            onChangeText={(text) => {
              setsecond(0);
              setssecond(0);
              setTitle2(text)
            }}
            autoCorrect
            onSubmitEditing={() => checkuser(2)}
          //onEndEditing={() => console.log("onEndEditing")}
          //onSubmitEditing={() => console.log("onSubmitEditing")}
          />
          {
            second == 1 && <View style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              height: 20,

            }}>
              <Text style={{
                fontFamily: 'Rn',
                textAlign: 'right',
                color: 'red',
                fontSize: 12
              }}>이미 존재하는 이메일입니다</Text>
            </View>

          }

          {
            ssecond == 1 && <View style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              height: 20,
              //backgroundColor: 'yellow',
            }}>
              <Text style={{
                fontFamily: 'Rn',
                textAlign: 'right',
                color: 'red',
                fontSize: 12
              }}>회원이메일이 공백입니다</Text>
            </View>
          }

          <Text style={{
            fontFamily: 'Rn',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10
          }}> 비밀번호 </Text>
          <TextInput
            style={{
              width: '90%',
              margin: 15,
              fontSize: 19,
              backgroundColor: 'white',
              height: 40,
              borderBottomColor: 'black',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              borderWidth: 0.9
            }}
            value={title3}
            onChangeText={(text) => setTitle3(text)}
            autoCorrect
          //onEndEditing={() => console.log("onEndEditing")}
          //onSubmitEditing={() => console.log("onSubmitEditing")}
          />
          <Text style={{
            fontFamily: 'Rn',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10
          }}> 비밀번호 재확인 </Text>
          <TextInput
            style={{
              width: '90%',
              margin: 15,
              fontSize: 19,
              backgroundColor: 'white',
              height: 40,
              borderBottomColor: 'black',
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderLeftColor: 'transparent',
              borderWidth: 0.9
            }}
            value={title4}
            onChangeText={(text) => setTitle4(text)}
            autoCorrect
            onSubmitEditing={() => checkuser(3)}
          //onEndEditing={() => console.log("onEndEditing")}
          //onSubmitEditing={() => console.log("onSubmitEditing")}
          />
          {
            third == 1 && <View style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              height: 20,

            }}>
              <Text style={{
                fontFamily: 'Rn',
                textAlign: 'right',
                color: 'red',
                fontSize: 12
              }}>비밀번호가 동일하지 않습니다</Text>
            </View>

          }


        </View>

        <View style={{
          width: '100%',
          flex: 1,
          //backgroundColor: 'pink',
          alignItems: 'center',
          display: 'flex'
        }}>

          <View style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            marginTop: 30,
            //backgroundColor: 'yellow',
            margin: 10,
            alignItems: 'center',
            display: 'flex'

          }}>
            <TouchableOpacity onPress={() =>
              check_icon()
            }>
              {
                count == 0 && <AntDesign
                  style={{
                    margin: 5
                  }}
                  name="checkcircleo" size={24} color="black" />
              }
              {
                count == 1 && <AntDesign style={{
                  margin: 5
                }} size={24} name="checkcircle" color="black" />
              }

            </TouchableOpacity>
            <Text style={{
              fontFamily: 'Rn',
              fontSize: 13
            }}> [필수] 서비스 이용약관 </Text>
          </View>


          <View style={{
            width: '90%',
            backgroundColor: 'black',
            height: 40,
            justifyContent: 'center',
            marginTop: 20


          }}>
            <TouchableOpacity onPress={() => {

              if (count == 1 &&
                first == 0 &&
                ffirst == 0 &&
                ssecond == 0 &&
                second == 0 &&
                third == 0
              ) {
                axios.post('http://192.168.45.236:3000/signup', {
                  "name": title,
                  "email": title2,
                  "password": title3,
                  "cart": [],


                }, { withCredentials: true })
                  //성공시 then 실행
                  .then(function (response) {
                    if (response.data) {
                      navigation.pop();
                    }
                  }).catch(function (error) {

                    console.log(error.response.data);
                  });
              }

            }

            }>
              <Text style={{
                fontFamily: 'Rn',
                color: 'white',
                fontSize: 17,
                textAlign: 'center'
              }}>
                가입완료
              </Text>
            </TouchableOpacity>
          </View>
        </View>





      </View>
    </View >
  )

}

New_.navigationOptions = () => {
  return {
    title: <Text style={{
      fontFamily: 'Rn',
      textAlign: 'center'
    }}> </Text>,

  };
};
export default New_;
