import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 /*=============Actions=============*/
import { 
   removeAllProduct, restoreAllProduct, 
   restoreLastProduct 
} from '../../Reducers/Products/products.ACT';

 /*=============Services=============*/
import { 
   getTotalProducts, getTotalPrice, 
   getAveragePrice
} from './Services/Summary.SER';

 /*=============Images============*/
import circles from '../Assets/Header/Images/circles.svg';

class ProductSUM extends Component {
   /*=============Action handlers=============*/
   reveal = () => {
      $(".RL-product-SUM").toggleClass("RL-product-SUM-CLK");
      $(".product-SUM").toggleClass("product-SUM-RVL");
      if(window.matchMedia("(max-width: 420px)").matches){
         $(".product-ADD").toggleClass("product-ADD-HDN");
      }        
   }

   /*================RENDER==================*/
   render() {
      return (
         <aside className="product-SUM">
            <div className="RL-product-SUM" onClick={this.reveal}>
               <img src={circles} alt="circles" />
            </div>
            <h1>Summary</h1>
            <section className="product-SUM-info">               
               <h4>Products available:</h4><p>{getTotalProducts(this.props.productStore)}</p>
               <h4>Total price:</h4><p>{getTotalPrice()}</p>
               <h4>Average price:</h4><p>{getAveragePrice()}</p>
            </section>           
            {this.props.acces &&
               <section className="product-vault-actions">
                  <button onClick={this.props.restoreLastProduct}>
                     Restore last
                  </button>
                  <button onClick={this.props.restoreAllProduct}>
                     Restore All
                  </button>
                  <button onClick={this.props.removeAllProduct}>
                     Delete All
                  </button>
               </section>
            }            
         </aside>
      );
   }
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      removeAllProduct, restoreAllProduct, restoreLastProduct
   }, dispatch)
}

export default connect(
   state => ({
      productStore: state.products.productVault,
      acces: state.roles.CurrentUser.accesability,
   }),
   matchDispatchToProps)(ProductSUM);