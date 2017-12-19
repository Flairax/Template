import AllUser from './roles-Init.json'

let USERS_LIST =[];

for (let key in Object.keys(AllUser.UsersList)) {
   USERS_LIST.push(AllUser.UsersList[key]);
}

function loginChek(login){
   console.log(login);
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
   console.log(record);
   console.log(password);
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
   },
   Chekker: {
      loginVal: true,
      passwordVal: true,    
      logined: false,
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
            console.log("passed");
            return {
               CurrentUser: {
                  name: action.payload.login,
                  accesability: loginBuffer.record.accesability,                  
               },
               Chekker: {
                  loginVal: true,
                  passwordVal: true,   
                  logined: true, 
               }  
            }           
         } else {
            console.log("Not passed");
            return {
               CurrentUser: {
                  name: "Anonymous",
                  accesability: false,
               },
               Chekker: {
                  loginVal: loginBuffer.validation,
                  passwordVal: false,  
                  logined: false,  
               }  
            }
         }
      }
      case "EXIT":
         return {
            CurrentUser: {
               name: "Anonymous",
               accesability: false,
            },
            Chekker: {
               loginVal: true,
               passwordVal: true,    
               logined: false,
            }  
         }
      default:
         return state;
   }
}

export default roles;