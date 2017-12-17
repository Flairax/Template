export const addProduct = (rawProduct) => {
    return{
        type: "ADD_PRODUCT",
        payload: rawProduct,
    }
}

export const removeProduct = (product) => {
   return{
       type: "REMOVE_PRODUCT",
       payload: product,
   }
}

export const removeAllProduct = () => {
   return{
       type: "REMOVE_ALL_PRODUCTS",
   }
}

export const restoreLastProduct = () => {
   return{
      type: "RESTORE_LAST_PRODUCT",
   }
}

export const restoreAllProduct = () => {
   return{
      type: "RESTORE_ALL_PRODUCTS",
   }
}