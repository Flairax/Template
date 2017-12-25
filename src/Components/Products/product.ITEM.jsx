import React from 'react';

/*=============Images============*/
import deleter from '../Assets/Main/Images/deleter.svg'

const product = (props) => {
   return (
      <li className="product">
         {props.acces &&
            <img 
               src={deleter} 
               alt="deleter" 
               className="deleter"
               onClick={() => props.remove(props.product)}
            />
         }
         <h1>{props.product.name}</h1>
         <img src={props.product.image} alt={props.product.name} className="product-Image" />
         <p>
            <b>Price:</b> 
            {parseInt(props.product.price, 10)}
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