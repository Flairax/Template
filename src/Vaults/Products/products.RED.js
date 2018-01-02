import initialStateJson from './products.INIT.json';

const initialState = {
   mainVault: [],
   restoreVault: [],
}

let idCounter = 0;

for (let key in Object.keys(initialStateJson.Products)) {
   initialState.mainVault.push(initialStateJson.Products[key]);
}

const products = (state = initialState, action) => {
   if (action.payload === "") return state

   switch (action.type) {
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
            restoreVault: [ ...state.restoreVault ] 
         }
      case 'REMOVE_PRODUCT': {
         return {
            mainVault: [
               ...state.mainVault.filter(product => product.id !== action.payload.id)
            ],
            restoreVault: [
               ...state.restoreVault, action.payload
            ]
         }
      }

      case 'REMOVE_ALL_PRODUCTS': {
         return {
            mainVault: [],
            restoreVault:[
               ...state.restoreVault, ...state.mainVault
            ]
         };
      }

      case 'RESTORE_LAST_PRODUCT': {
         if (state.restoreVault.length) {
            return {
               mainVault: [
                  ...state.mainVault, ...state.restoreVault.slice(-1)      
               ],
               restoreVault:[
                  ...state.restoreVault.slice(0, -1)
               ]
            }
         }
         alert("No elemts have been removed yet / restore vault is empty");
         return state;
      }
      case 'RESTORE_ALL_PRODUCTS': {
         if (state.restoreVault.length) {
            return {
               mainVault:[
                  ...state.mainVault, ...state.restoreVault.slice(0)
               ],
               restoreVault: []
            }
         }
         alert("No elemts have been removed yet / restore vault is empty");
         return state;
      }
      
      default:
         return state;
   }
}

export default products;