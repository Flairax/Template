import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 /*=============Actions=============*/
import { 
   removeAllProduct, restoreAllProduct, 
   restoreLastProduct 
} from '../../Vaults/Products/products.ACT';

 /*=============Services=============*/
import { 
   resetValues, getTotalProducts, 
   getTotalPrice, getAveragePrice
} from './Services/Summary.SER';

 /*=============Images============*/
import circles from '../Assets/Header/Images/circles.svg';

class ProductSUM extends Component {
   constructor(props) {
      super(props);
      this.state = {
         btnClass: "",
         blockClass: ""
      }
   }

   /*=============Lifecycle=============*/
   componentWillUpdate(){
      resetValues();
   }
   
   /*=============Action handlers=============*/
   reveal = () => {
      this.setState(prevState => {
         return {
            btnClass: prevState.btnClass === "" ? "RL-product-SUM-CLK" : "",
            blockClass: prevState.blockClass === "" ? "product-SUM-RVL" : "",
         };
      });
   }

   /*================RENDER==================*/
   render() {
      return (
         <aside className={"product-SUM "+this.state.blockClass}>
            <h1>Summary</h1>
            
             {/*=============Revealer=============*/}
            <div className={"RL-product-SUM "+this.state.btnClass} onClick={this.reveal}>
               <img src={circles} alt="circles" />
            </div>
            
            {/*=============Info=============*/}
            <section className="product-SUM-info">               
               <h4>Products available:</h4><p>{getTotalProducts(this.props.productStore)}</p>
               <h4>Total price:</h4><p>{getTotalPrice()}</p>
               <h4>Average price:</h4><p>{getAveragePrice()}</p>
            </section>  

            {/*=============Admin buttons=============*/}         
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

export default connect(state => ({
   productStore: state.products.mainVault,
   acces: state.roles.CurrentUser.accesability,
}), matchDispatchToProps)(ProductSUM);