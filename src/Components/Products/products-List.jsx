import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeProduct } from './products-Actions';

import deleter from '../Assets/Main/Images/deleter.svg'

class ProductList extends Component {
   /*=============Additional functions=============*/
   showList() {
      return this.props.productStore.map(product => {
         return (
            <li key={product.id} className="product">
               {this.props.acces &&
                  <img src={deleter} alt="deleter" className="deleter"
                     onClick={() => this.props.removeProduct(product)}>
                  </img>
               }
               <h1>{product.name}</h1>
               <img src={product.image} alt={product.name} className="product-Image"/>
               <h4>Price:</h4><p> {parseInt(product.price, 10)}</p>
               <h4 >Decription:</h4><p>{product.description}</p>
            </li>
         );
      });
   }
   
   /*================RENDER==================*/
   render() {
      return (
         <ul className="product-List">
            {this.showList()}
         </ul>
      );
   }
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      removeProduct,
   }, dispatch)
}

export default connect(
   state => ({
      productStore: state.products.productVault,
      acces: state.roles.CurrentUser.accesability,
   }), matchDispatchToProps)(ProductList);