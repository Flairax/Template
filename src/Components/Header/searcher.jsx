import React, { Component } from 'react';

import loomp from './Assets/Images/loomp.svg';

import { searcherShifter } from './MediaShifter/mediaShifter';

export default class Searcher extends Component {
   render() {
      return (
         <aside >
            <button id="Revealer-search" className="revealer-search" onClick={searcherShifter}>
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