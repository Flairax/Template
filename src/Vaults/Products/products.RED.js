import initialStateJson from './products.INIT.json';

const initialState = {
   mainVault: [],
   restoreVault: [],
   selected: {}
}

let idCounter = 0;

for (let key in Object.keys(initialStateJson.Products)) {
   initialState.mainVault.push(initialStateJson.Products[key]);
}

const products = (state = initialState, action) => {
   if (action.payload === "") return state

   switch (action.type) {
      /*=============================================================*/   
      case 'ADD_PRODUCT':
         return {
            mainVault: [
               ...state.mainVault,
               {
                  id: idCounter++,
                  name: action.payload.name,
                  image: action.payload.image_ref,
                  description: action.payload.description,
                  price: action.payload.price,
               }
            ],
            restoreVault: [ ...state.restoreVault ], 
            selected: state.selected,
         }
      /*=============================================================*/   
      case 'REMOVE_PRODUCT': {
         return {
            mainVault: [
               ...state.mainVault.filter(product => product.id !== action.payload.id)
            ],
            restoreVault: [
               ...state.restoreVault, action.payload
            ],
            selected: state.selected,
         }
      }
      /*=============================================================*/   
      case 'REMOVE_ALL_PRODUCTS': {
         return {
            mainVault: [],
            restoreVault:[
               ...state.restoreVault, ...state.mainVault
            ],
            selected: state.selected,
         };
      }
      /*=============================================================*/   
      case 'RESTORE_LAST_PRODUCT': {
         if (state.restoreVault.length) {
            return {
               mainVault: [
                  ...state.mainVault, ...state.restoreVault.slice(-1)      
               ],
               restoreVault:[
                  ...state.restoreVault.slice(0, -1)
               ],
               selected: state.selected,
            }
         }
         alert("No elemts have been removed yet / restore vault is empty");
         return state;
      }
      /*=============================================================*/   
      case 'RESTORE_ALL_PRODUCTS': {
         if (state.restoreVault.length) {
            return {
               mainVault:[
                  ...state.mainVault, ...state.restoreVault.slice(0)
               ],
               restoreVault: [],
               selected: state.selected,
            }
         }
         alert("No elemts have been removed yet / restore vault is empty");
         return state;
      }
      /*=============================================================*/  
      case 'SELECT_PRODUCT': {
         return{
            mainVault: state.mainVault,
            restoreVault: state.restoreVault,
            selected: action.payload
         }
      }
      /*=============================================================*/  
      default:
         return state;
   }
}

export default products;