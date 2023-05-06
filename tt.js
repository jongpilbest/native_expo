

import { useSelector, useDispatch } from 'react-redux';


const token = useSelector((state) => state.token.token);
const f_token = function () {
 if (token == '') {

  return navigation.navigate('Login')
 }
 else {

  return navigation.navigate('My_page')
 }

}

module.exports = { token };

