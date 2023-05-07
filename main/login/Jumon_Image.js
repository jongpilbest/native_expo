

import React from "react";
import { View, Image } from "react-native";
const Jumon_Image = function ({ data }) {
 console.log('이미지', data)
 return (
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
    // source={{ uri: total.product_image[0] }}
    source={{ uri: data.productId.product_image[0] }}
   />
  </View>
 )
}
export default Jumon_Image;
