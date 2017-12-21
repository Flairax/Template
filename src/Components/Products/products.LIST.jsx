import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 /*=============Actions=============*/
import { removeProduct } from '../../Reducers/Products/products.ACT';

 /*=============Images============*/
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
               <p><b>Price:</b> {parseInt(product.price, 10)}</p>
               <p className="descr"><b>Decription:</b><br/>{product.description}</p>
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