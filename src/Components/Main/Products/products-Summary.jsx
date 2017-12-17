import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAllProduct, restoreAllProduct, restoreLastProduct } from './products-Actions';

import circles from '../Assets/Images/circles.svg';

import { summaryProductShifter } from '../../Header/MediaShifter/mediaShifter';

class productsummary extends Component {
   summaryCounter(request) {
      let totulPrice = 0;
      let averagePrice = 0;
      let totulProducts = this.props.productStore.length;

      this.props.productStore.forEach(todo => {
         totulPrice += parseFloat(todo.price, 10);
      });

      averagePrice = totulPrice / totulProducts;

      function styling(variable, isFloat) {
         if (isFloat) {
            return variable.toFixed(2).toLocaleString();
         } else {
            return variable.toLocaleString();
         }
      }

      switch (request) {
         case "totulProducts": return styling(totulProducts, false);
         case "totulPrice": return styling(totulPrice, true);
         case "averagePrice": return styling(averagePrice, true);

         default: throw new Error("No such value have been found!");
      }
   }

   render() {
      return (
         <aside id="Summary-sidebar" className="summary-sidebar">
            <h1>Summary</h1><hr />
            <section className="summary-products">
               <h4>Products available:</h4><p>{this.summaryCounter("totulProducts")}</p>
               <h4>Totul price:</h4><p>{this.summaryCounter("totulPrice")}</p>
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