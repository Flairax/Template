import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAllProduct, restoreAllProduct, restoreLastProduct } from './products-Actions';

import circles from '../Assets/Images/circles.svg';

import { summaryProductShifter } from '../../Header/MediaShifter/mediaShifter';

class productsummary extends Component {
   summaryCounter(request) {
      let totalPrice = 0;
      let averagePrice = 0;
      let totalProducts = this.props.productStore.length;

      this.props.productStore.forEach(todo => {
         totalPrice += parseFloat(todo.price, 10);
      });

      averagePrice = totalPrice / totalProducts;

      function styling(variable, isFloat) {
         if (isFloat) {
            return variable.toFixed(2).toLocaleString();
         } else {
            return variable.toLocaleString();
         }
      }

      switch (request) {
         case "totalProducts": return styling(totalProducts, false);
         case "totalPrice": return styling(totalPrice, true);
         case "averagePrice": return styling(averagePrice, true);

         default: throw new Error("No such value have been found!");
      }
   }

   render() {
      return (
         <aside id="Summary-sidebar" className="summary-sidebar">
            <h1>Summary</h1><hr />
            <section className="summary-products">
               <h4>Products available:</h4><p>{this.summaryCounter("totalProducts")}</p>
               <h4>Total price:</h4><p>{this.summaryCounter("totalPrice")}</p>
               <h4>Average price:</h4><p>{this.summaryCounter("averagePrice")}</p>
            </section>
            {this.props.acces &&
               <div className="productActions">
                  <button onClick={this.props.restoreLastProduct}>
                     Restore last
                  </button>
                  <button onClick={this.props.restoreAllProduct}>
                     Restore All
                  </button>
                  <button onClick={this.props.removeAllProduct}>
                     Delete All
                  </button>
               </div>
            }
            <div id="Revealer-summary" className="revealer-summary" onClick={summaryProductShifter}>
               <img src={circles} alt="circles" />
            </div>
         </aside>
      );
   }
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({
      removeAllProduct, restoreAllProduct, restoreLastProduct
   }, dispatch)
}

export default connect(
   state => ({
      productStore: state.products.productVault,
      acces: state.roles.accesability,
   }),
   matchDispatchToProps)(productsummary);