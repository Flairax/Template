import $ from 'jquery';
import React, { Component } from 'react';

/*=============Images=============*/
import loomp from '../Assets/Header/Images/loomp.svg';


export default class Searcher extends Component {
   /*=============Action handlers=============*/
   reveal = () => {
      $(".RL-searcher").toggleClass("RL-searcher-CLK");
      $(".searcher").toggleClass("searcher-RVL");
   }
   
   /*================RENDER==================*/
   render() {
      return (
         <aside>
            <button className="RL-searcher" onClick={this.reveal}>
               <img src={loomp} alt="loomp" />
            </button>
            <form className="searcher">
               <input type="search" placeholder="Enter query" />
               <button type="submit">Search</button>
            </form>
         </aside>
      );
   }
}