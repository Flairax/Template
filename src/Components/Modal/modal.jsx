import React, { Component } from 'react';

/*================Jauery==================*/
import $ from 'jquery'

export default class Modal extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <dialog id={this.props.order} className="greeting">
            <section className="info">
               {this.props.text}
               <button onClick={() => { $(`.greeting#${this.props.order}`).removeClass("modal-RVL") }}>Understand</button>
            </section>
         </dialog>
      );
   }
}