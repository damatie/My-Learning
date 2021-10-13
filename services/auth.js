/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import {reactLocalStorage} from 'reactjs-localstorage';


export const setAuthorizedUser = (value)=>{
  localStorage.setItem('token',value );
  localStorage.setItem('isAuthorized',true);
}
export const checkAuthorizedUser = ()=>{
  if('token' in localStorage ){
    return true
  }else{
    console.log('not loggedIn')
  }
} 

export const userLogOut = (value)=>{
  localStorage.clear(value);
  localStorage.clear();
}

 