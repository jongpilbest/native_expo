

import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from "../redux/token";
import React from 'react';
const tt = function () {


 console.log('토큰 지금', token)
 return (useSelector((state) => state.token.token));

}

export default { tt };
