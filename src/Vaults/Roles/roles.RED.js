import DefAvatar from "../../Components/Assets/Header/Images/avatar.svg"

import AllUser from './roles.INIT.json'

let USERS_LIST =[];

for (let key in Object.keys(AllUser.UsersList)) {
   USERS_LIST.push(AllUser.UsersList[key]);
}

function loginChek(login){
   for (let i = 0; i < USERS_LIST.length; i++) {
      if(login === USERS_LIST[i].name){
         return {
            record: USERS_LIST[i],
            validation: true,
         }
      }     
   }
   return {
      record: null,
      validation: false,
   }
}

function passworChek(record, password){
   if(record === null) return false;
   if(password === record.password){
      return true;
   }else{
      return false;
   }
}

const initialState = {
   CurrentUser: {
      name: "Anonymous",
      accesability: false,
      avatar: DefAvatar,
   },
   Chekker: {
      loginVal: true,
      passwordVal: true,    
      authorised: false,
   }  
}

let loginBuffer;
let passwordBuffer;

const roles = (state = initialState, action) => {
   switch (action.type) {
      case "LOGIN": {
         loginBuffer = loginChek(action.payload.login);
         passwordBuffer = (passworChek(loginBuffer.record, action.payload.password));
         if(loginBuffer && passwordBuffer){
            return {
               CurrentUser: {
                  name: action.payload.login,
                  accesability: loginBuffer.record.accesability,      
                  avatar: loginBuffer.record.avatar,              
               },
               Chekker: {
                  loginVal: true,
                  passwordVal: true,   
                  authorised: true, 
               }  
            }           
         } else {
            return {
               CurrentUser: {
                  name: "Anonymous",
                  accesability: false,
                  avatar: DefAvatar,
               },
               Chekker: {
                  loginVal: loginBuffer.validation,
                  passwordVal: false,  
                  authorised: false,  
               }  
            }
         }
      }
      case "EXIT":
         return {
            CurrentUser: {
               name: "Anonymous",
               accesability: false,
               avatar: DefAvatar,
            },
            Chekker: {
               loginVal: true,
               passwordVal: true,    
               authorised: false,
            }  
         }
      default:
         return state;
   }
}

export default roles;