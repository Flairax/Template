import initialStateJson from './products-Init.json';

const initialState = {
   productVault: [],
   restoreVault: [],
}

let idCounter = 0;

for (let key in Object.keys(initialStateJson.Products)) {
   initialState.productVault.push(initialStateJson.Products[key]);
}

const products = (state = initialState, action) => {
   if (action.payload === "") return state

   switch (action.type) {
      case 'ADD_PRODUCT':
         return {
            productVault: [
               ...state.productVault,
               {
                  id: idCounter++,
                  name: action.payload.name,
                  image: action.payload.image_ref,
                  description: action.payload.description,
                  price: action.payload.price,
               }
            ],
            restoreVault: state.restoreVault
         }
      case 'REMOVE_PRODUCT': {
         return {
            productVault: [
               ...state.productVault.filter(product => product.id !== action.payload.id)
            ],
            restoreVault: [
               ...state.restoreVault, action.payload
            ]
         }
      }

      case 'REMOVE_ALL_PRODUCTS': {
         return {
            productVault: [],
            restoreVault:[
               ...state.restoreVault, ...state.productVault
            ]
         };
      }

      case 'RESTORE_LAST_PRODUCT': {
         console.log(state.restoreVault.length)
         if (state.restoreVault.length) {
            return {
               productVault: [
                  ...state.productVault, ...state.restoreVault.slice(-1)      
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
               productVault: state.productVault.concat(state.restoreVault.slice(0, state.restoreVault.length))
               ,
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