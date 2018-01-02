import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*=============Components=============*/
import Product from './product.ITEM';

/*=============Actions=============*/
import { removeProduct, selectProduct } from '../../Vaults/Products/products.ACT';

const productList = (props) => {
   return (
      <ul className="product-List">
         {props.productStore.map(product => {
            return (
               <li className="product" onClick={() => props.selectProduct(product)} key={product.id}>
               <Product
                  product={product}
                  remove={props.removeProduct}
                  acces={props.acces}           
               />
               </li>
            );
         })}
      </ul>
   );
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      removeProduct,
      selectProduct
   }, dispatch)
}

export default connect(state => ({
   productStore: state.products.mainVault,
   acces: state.roles.CurrentUser.accesability,
}), matchDispatchToProps)(productList);