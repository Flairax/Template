import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

/*=============Images============*/
import deleter from '../Assets/Main/Images/deleter.svg'

const product = (props) => {
   return (
      <Fragment>
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
         <Link to="/Product.PAGE"><h1>{props.product.name}</h1></Link>        
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
      </Fragment>
   );
}

export default product;