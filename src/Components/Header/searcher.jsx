import React, { Component } from 'react';

import loomp from './Assets/Images/loomp.svg';

import $ from 'jquery';

export default class Searcher extends Component {
   handleClick(){
      $("#Searcher").toggleClass("search-opened");
      $("#Revealer").toggleClass("search-revealer-opened");
   }
   
   render() {
      return (
         <aside >
            <button id="Revealer" className="search-revealer" onClick={this.handleClick}>
               <img src={loomp} alt="loomp" />
            </button>
            <form id="Searcher" className="search-box">
               <input type="submit" id="submit" value="Search" />
               <input type="text" id="field" placeholder="Enter query" />
            </form>
         </aside>
      );
   }

}