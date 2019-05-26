let totalProducts = 0;
let totalPrice = 0;
let averagePrice = 0;  

export function resetValues(){
   totalProducts = 0;
   totalPrice = 0;
   averagePrice = 0; 
}

export function getTotalProducts(productStore){
   totalProducts = productStore.length;
   productStore.forEach( product => {
      totalPrice += parseFloat(product.price, 10);
   });

   if(totalProducts !== 0){
      averagePrice = totalPrice / totalProducts;
   } 

   return totalProducts;
}

export function getTotalPrice(){
   return totalPrice.toFixed(2);
}

export function getAveragePrice(){
   return averagePrice.toFixed(2);
}