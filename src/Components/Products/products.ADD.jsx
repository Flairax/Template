import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 /*=============Actions=============*/
import { addProduct } from '../../Vaults/Products/products.ACT';

 /*=============Toggler============*/
 import { toggleACT } from '../Header/shared.ACT';

 /*=============Images=============*/
import circles from '../Assets/Header/Images/circles.svg';

class ProductADD extends Component {
   constructor(props) {
      super(props);
      this.state = {
         btnClass: "",
         blockClass: ""
      }
   }

   /*=============Action handlers=============*/
   toggle = () => toggleACT(this)

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

   /*================RENDER==================*/
   render() {
      return (
         <aside className={"product-ADD"+this.state.blockClass} > 
            {/*==============Revealer===============*/}
            <div className={"RL-product-ADD"+this.state.btnClass} onClick={this.toggle}>
               <img src={circles} alt="circles" />
            </div>

            {/*==============Form===============*/}
            <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Name" ref="name" required/>
               <input type="url" placeholder="URL to image" ref="image" />
               <input type="number" placeholder="Price" ref="price" required/>
               <input type="text" placeholder="Description" ref="description" />
               <button type="submit">Add product</button>
            </form>
         </aside>
      );
   } 
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({ addProduct }, dispatch)
}

export default connect(state => ({

}), matchDispatchToProps)(ProductADD);