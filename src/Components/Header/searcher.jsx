import React, { Component } from 'react';

import loomp from '../Assets/Header/Images/loomp.svg';

import $ from 'jquery';

export default class Searcher extends Component {
   constructor(){
      super();
      this.revealer = null;
      this.form = null;
   }

   componentDidMount(){
      this.revealer = $("#Revealer-search");
      this.form = $("#Search-box");

      let array = [1, 2, 3, 4];
      console.log(array.slice(0, -1))
   }
   
   reveal = () => {
      this.revealer.toggleClass("search-opened");
      this.form.toggleClass("search-block-opened");
   }

   render() {
      return (
         <aside >
            <button id="Revealer-search" className="revealer-search" onClick={this.reveal}>
               <img src={loomp} alt="loomp" />
            </button>
            <form id="Search-box" className="search-box">
               <input type="submit" id="submit" value="Search" />
               <input type="search" id="field" placeholder="Enter query" />
            </form>
         </aside>
      );
   }
}