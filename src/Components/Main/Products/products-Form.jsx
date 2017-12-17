import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct } from './products-Actions';
import circles from '../Assets/Images/circles.svg';

import { adderProductShifterInit, adderProductShifter } from '../../Header/MediaShifter/mediaShifter';

class TodoForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         rawProduct: {
            name: '',
            image_ref: '',
            price: '',
            description: '',
         },
      };
   }

   componentDidMount() {
      adderProductShifterInit();
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.props.addProduct(this.state);
      this.setState({
         name: '',
         image_ref: '',
         price: '',
         description: '',
      });
   }

   render() {
      return (
         <aside>
            <form id="Adder-product" className="adder-product" onSubmit={this.handleSubmit}>
               <div id="Revealer-adder-product" className="revealer-adder-product" onClick={adderProductShifter}>
                  <img src={circles} alt="circles" />
               </div>
               <input className="input" required type="text" placeholder="Name" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} />
               <input className="input" type="url" placeholder="URL to image" onChange={(event) => this.setState({ image_ref: event.target.value })} value={this.state.image_ref} />
               <input className="input" required type="number" placeholder="price" onChange={(event) => this.setState({ price: event.target.value })} value={this.state.price} />
               <input className="input" type="text" placeholder="Description" onChange={(event) => this.setState({ description: event.target.value })} value={this.state.description} />
               <button type="submit">Add product</button>
            </form>
         </aside>
      );
   }
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({ addProduct }, dispatch)
}

export default connect(
   state => ({}), matchDispatchToProps)(TodoForm);