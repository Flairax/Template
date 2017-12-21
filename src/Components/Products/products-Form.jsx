import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct } from './products-Actions';
import circles from '../Assets/Header/Images/circles.svg';

import $ from 'jquery';

class TodoForm extends Component {
   reveal = () => {
      $("#Revealer-product-adder").toggleClass("adder-opened");
      $("#Product-adder-box").toggleClass("adder-block-opened");
   }

   render() {
      return (
         <aside id="Product-adder-box" className="product-adder-box" > 
            <div id="Revealer-product-adder" className="revealer-product-adder" onClick={this.reveal}>
               <img src={circles} alt="circles" />
            </div>
            <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Name"   ref="name" required/>
               <input type="url" placeholder="URL to image"  ref="image" />
               <input type="number" placeholder="Price"  ref="price" required/>
               <input type="text" placeholder="Description"  ref="description" />
               <button type="submit">Add product</button>
            </form>
         </aside>
      );
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.props.addProduct({
            name: this.refs.name.value,
            image_ref: this.refs.image.value,
            price: this.refs.price.value,
            description: this.refs.description.value,
      });

      this.refs.name.value = "";
      this.refs.image.value = "";
      this.refs.price.value = "";
      this.refs.description.value = "";
   }
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({ addProduct }, dispatch)
}

export default connect(
   state => ({}), matchDispatchToProps)(TodoForm);