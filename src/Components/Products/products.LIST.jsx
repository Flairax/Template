import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from './product.ITEM';

/*=============Actions=============*/
import { removeProduct } from '../../Vaults/Products/products.ACT';

const productList = (props) => {
   return (
      <ul className="product-List">
         {props.productStore.map(product => {
            return (
               <Product
                  product={product}
                  remove={props.removeProduct}
                  acces={props.acces}
                  key={product.id}
               />
            );
         })}
      </ul>
   );
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      removeProduct,
   }, dispatch)
}

export default connect(
   state => ({
      productStore: state.products.mainVault,
      acces: state.roles.CurrentUser.accesability,
   }), matchDispatchToProps)(productList);