import React, { Component } from 'react';

/*================Images==================*/
import deleter from '../Assets/Main/Images/deleter.svg'

/*================Jauery==================*/
import $ from 'jquery'

export default class Modal extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <dialog id={this.props.order} className="modal">
            <section className="info">
               {this.props.text}
               {
                  this.props.closeBy === "button" ?
                  <button onClick={() => { $(`.modal#${this.props.order}`).removeClass("modal-RVL") }}>Understand</button>
                  :
                  <img src={deleter} alt="deleter" className="deleter"
                     onClick={() => {$(`.modal#${this.props.order}`).removeClass("modal-RVL"); console.log("close")}}>
                  </img>
               }
               
            </section>
         </dialog>
      );
   }
}