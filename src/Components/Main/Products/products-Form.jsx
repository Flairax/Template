import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct } from './products-Actions';
import circles from '../Assets/Images/circles.svg';

import $ from 'jquery';

class TodoForm extends Component {
   componentDidMount() {
      this.setState({
         revealer: $("#Revealer-adder-product"),
         form: $("#Adder-product"),
      });
   }

   reveal = () => {
      this.state.revealer.toggleClass("adder-opened");
      this.state.form.toggleClass("adder-block-opened");
   }

   render() {
      return (
         <aside>
            <form id="Adder-product" className="adder-product" onSubmit={this.handleSubmit}>
               <div id="Revealer-adder-product" className="revealer-adder-product" onClick={this.reveal}>
                  <img src={circles} alt="circles" />
               </div>
               <input className="input" type="text" placeholder="Name"   ref="name" required/>
               <input className="input" type="url" placeholder="URL to image"  ref="image" />
               <input className="input" type="number" placeholder="Price"  ref="price" required/>
               <input className="input" type="text" placeholder="Description"  ref="description" />
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