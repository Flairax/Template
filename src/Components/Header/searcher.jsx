import React, { Component } from 'react';

import loomp from './Assets/Images/loomp.svg';

import $ from 'jquery';

export default class Searcher extends Component {
   componentDidMount(){
      this.setState({
         revealer: $("#Revealer-search"),
         form: $("#Searcher"),
      });
   }
   
   reveal = () => {
      this.state.revealer.toggleClass("search-opened");
      this.state.form.toggleClass("search-block-opened");
   }

   render() {
      return (
         <aside >
            <button id="Revealer-search" className="revealer-search" onClick={this.reveal}>
               <img src={loomp} alt="loomp" />
            </button>
            <form id="Searcher" className="search-box">
               <input type="submit" id="submit" value="Search" />
               <input type="search" id="field" placeholder="Enter query" />
            </form>
         </aside>
      );
   }
}