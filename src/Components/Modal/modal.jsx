import React, { Component } from 'react';

/*================Images==================*/
import deleter from '../Assets/Main/Images/deleter.svg'

/*================Jauery==================*/
import $ from 'jquery'

export default class Modal extends Component {
   /*================Handlers==================*/
   close = () => {
      $(`#${this.props.name}`).removeClass("modal-shadow-RVL");
      $(`#${this.props.name}>.info`).removeClass("modal-RVL");
   }

   /*================RENDER==================*/
   render() {
      return (
         <dialog id={this.props.name} className="modal">
            <section className="info">
               {this.props.text}
               {this.props.closeBy === "button" ? (
                  <button onClick={this.close}>Understand</button>
               ) : (
                  <img src={deleter} alt="deleter" className="deleter"
                     onClick={this.close}>
                  </img>
               )}
            </section>
         </dialog>
      );
   }
}