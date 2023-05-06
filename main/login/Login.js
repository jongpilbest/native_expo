import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, ScrollView, TouchableOpacity, Button, StyleSheet, Text, Dimensions } from "react-native"
//import Main_Com from "./main_Com"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

import { AntDesign } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

import { EvilIcons } from '@expo/vector-icons';
import { tokenAction } from "../../redux/token";
const Login = function ({ navigation, state }) {
 const [title, setTitle] = useState(false);
 const [title2, setTitle2] = useState(false);
 const [error, sererror] = useState(0);
 const dispatch = useDispatch();


 const [token, settoken] = useState('');


 const tt = useSelector((state) => state.token.token);
 const name = useSelector((state) => state.token.name);
 useEffect(() => {


  console.log(token, '뭐요', '갑자기', tt)
  if (tt == '') {
   settoken('')
  }

 }, [tt])



 return (
  <View style={{
   backgroundColor: 'white',
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,


  }}>
   {token == '' &&
    <View style={{
     backgroundColor: 'white',
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
    }}>
     <View style={{
      width: '100%',
      flex: 1,
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
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10
       }}> 이메일 주소 </Text>
       <TextInput
        style={{
         width: '90%',
         margin: 15,
         fontSize: 26,
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

         sererror(0);

         setTitle(text)
        }}
        autoCorrect
       //onEndEditing={() => console.log("onEndEditing")}
       //onSubmitEditing={() => console.log("onSubmitEditing")}
       />
       <Text style={{
        fontFamily: 'Rn',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10
       }}> 비밀번호 </Text>
       <TextInput
        style={{
         width: '90%',
         margin: 15,
         fontSize: 26,
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
         sererror(0)
         setTitle2(text)
        }}
        autoCorrect
       //onEndEditing={() => console.log("onEndEditing")}
       //onSubmitEditing={() => console.log("onSubmitEditing")}
       />
       <View style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end'

       }}>
        <Text style={{
         fontFamily: 'Rn',
         margin: 10,
         fontSize: 13
        }}>
         이메일 찾기
        </Text>
        <Text style={{
         fontFamily: 'Rn',
         margin: 10,
         fontSize: 13
        }}>
         비밀번호 찾기
        </Text>
       </View>
       <View>
        {error != 0 &&
         <Text style={{
          fontFamily: 'Rn',
          margin: 10,
          fontSize: 15,
          color: 'red'
         }}>
          {error}
         </Text>
        }

       </View>
      </View>


     </View>
     <View style={{
      width: '100%',
      flex: 1,

      alignItems: 'center',
      display: 'flex'
     }}>





      <View style={{
       width: '90%',
       backgroundColor: 'black',
       height: 50,
       justifyContent: 'center',


      }}>
       <TouchableOpacity onPress={async () => {
        const { data } = await axios.post('http://192.168.45.191:3000/signin', {
         "email": title,
         "password": title2

        }, { withCredentials: true });
        console.log(data)
        if (data) {
         dispatch(tokenAction.settoken(data.token))
         settoken(data.token)
         var change = [...data.user];
         console.log(change)
         var aa = [];
         change.map((el, index) => {
          el.size.map((ev, index) => {
           var new_item = {
            productId: el,
            size: {
             size: ev.size,
             quantity: ev.quantity
            }

           }
           aa.push(new_item)
          })
         })
         setTitle('')

         setTitle2('')

         dispatch(tokenAction.setprice(data.user_total))
         dispatch(tokenAction.setname(data.user_info))

         dispatch(tokenAction.setlike(data.like));
         console.log(data.token, '토큰요')
         const dd = await axios.post(`http://192.168.45.191:3000/Cart_quantity`, {}, {
          headers: {
           'Authorization': `Bearer ${data.token}`
          }
         })

         if (dd) {
          console.log('디디', dd);

          var aa = [];
          var ima_price = data.user_total;


          dd.data.item.map((el, index) => {
           el.size.map((ev, index) => {

            if (ev.opacity == 0.6) {
             ima_price -= (el.productId.price * ev.quantity)

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
          dispatch(tokenAction.setprice(ima_price))
          dispatch(tokenAction.setuser(aa));
          console.log(aa, '넣니? 왜 오류여')


         }
        }
        //성공시 then 실행











        // navigation.navigate('My_page')}
       }

       }
       >
        <Text style={{
         fontFamily: 'Rn',
         color: 'white',
         fontSize: 17,
         textAlign: 'center'
        }}>
         로그인
        </Text>
       </TouchableOpacity>
      </View>

      <View style={{
       width: '90%',
       backgroundColor: 'white',
       height: 50,
       justifyContent: 'center',
       borderColor: 'black',
       borderWidth: 0.9
       , marginTop: 20

      }}>
       <TouchableOpacity onPress={() => navigation.navigate('New_')}>

        <Text style={{
         fontFamily: 'Rn',
         color: 'black',
         fontSize: 17,
         textAlign: 'center'
        }}>
         회원가입
        </Text>
       </TouchableOpacity>

      </View>
     </View>
    </View>
   }
   {
    token != '' &&

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
       justifyContent: 'center',
       alignItems: 'center'

      }}>
       <TouchableOpacity onPress={() => {
        dispatch(tokenAction.settoken(''));
        dispatch(tokenAction.setuser([]));

        dispatch(tokenAction.setprice(0))
        dispatch(tokenAction.setname(''))

        dispatch(tokenAction.setlike([]));







        console.log(token, '토큰 지금워')

       }}>


        <Text style={{
         color: 'black',
         fontSize: 9,
         fontFamily: 'Rn',

         textAlign: 'center'


        }}>
         로그아웃
        </Text>
       </TouchableOpacity>
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
   }

  </View >
 )

}

Login.navigationOptions = () => {
 return {

  title: <Text style={{
   fontFamily: 'Rn',
   textAlign: 'center'
  }}>  </Text>,

 };
};
export default Login;