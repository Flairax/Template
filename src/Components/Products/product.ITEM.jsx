import React from 'react';

/*=============Images============*/
import deleter from '../Assets/Main/Images/deleter.svg'

const product = (props) => {
   return (
      <li className="product">
          {/*=============Delete button=============*/}
         {props.acces &&
            <img 
               src={deleter} 
               alt="deleter" 
               className="deleter"
               onClick={() => props.remove(props.product)}
            />
         }

         {/*=============Info=============*/}
         <h1>{props.product.name}</h1>
         <img src={props.product.image} alt={props.product.name} className="product-Image" />
         <p>
            <b>Price: </b> 
            {parseFloat(props.product.price).toFixed(2)}
         </p>
         <p className="descr">
            <b>Decription:</b>
            <br />
            {props.product.description}
         </p>
      </li>
   );
}

export default product;