import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeProduct } from './products-Actions';

import deleter from '../Assets/Images/deleter.svg'

class ProductList extends Component {
   showList() {
      return this.props.productStore.map(product => {
         return (
            <li key={product.id} className="listItem">
               {this.props.acces &&
                  <img src={deleter} alt="deleter" className="deleter"
                     onClick={() => this.props.removeProduct(product)}>
                  </img>
               }
               <h1>{product.name}</h1>
               <img src={product.image} alt={product.name} className="productImage" />
               <h4 className="prodPrice">Price:</h4><p> {parseInt(product.price, 10)}</p>
               <h4 >Decription:</h4><p className="prodDesc">{product.description}</p>
            </li>
         );
      });
   }

   render() {
      return (
         <ul id="ProductList">
            {this.showList()}
         </ul>
      );
   }
}

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