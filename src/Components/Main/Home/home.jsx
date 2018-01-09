import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

import $ from 'jquery';


let prevItemId = null,
   temp = null;
export default class Home extends Component {
   constructor(props) {
      super(props);

      this.data = {
         columns: [
            ['Crelo', 30, 200, 100, 400, 150, 250],
            ['Arlo', 250, 30, 60, 320, 25, 35],
            ['Lokedo', 50, 20, 10, 40, 15, 25],
            ['Bernali', 250, 30, 60, 320, 25, 35],
            ['Axorfvido', 250, 30, 60, 320, 25, 35],
            ['Menaxjeri', 250, 30, 60, 320, 25, 35],          
         ],
         
      };

      this.tooltip = {
         grouped: false
       }

      this.legend = {
         item: {
            onclick: function(id){
               let legend_items = $(Array.from(document.getElementsByClassName('c3-legend-item'))
                  .filter(item => {
                     return !item.classList.contains(`c3-legend-item-${id}`);
                  })
               );

               if (prevItemId === id) {
                  legend_items.removeClass("shadow-legend");
                  $(`.c3-target-${id}`).removeClass("bolder-line");
                  prevItemId = null;

                  return null;
               } else {
                  console.log(id)

                  $(`.c3-legend-item-${id}`).removeClass("shadow-legend");

                  legend_items.addClass("shadow-legend");
                  
                  prevItemId = id;

                  for (let i = 0; i < this.data.targets.length; i++) {
                     if(this.data.targets[i].id === id){
                        temp = this.data.targets[i];
                     }
                     
                  }

                  this.api.unload(id);
   
                  let tempArr = [];
                  for (let i = 0; i < temp.values.length; i++) {
                     tempArr.push(temp.values[i].value)
                     
                  }
                  tempArr.unshift(temp.id)
                  console.log(temp.id)
                  setTimeout(()=>{
                     this.api.load({
                        columns: [
                           tempArr,                                           
                        ],
                     });
                     $(`.c3-target-${id}`).addClass("bolder-line");
                     setTimeout(() => {
                        this.api.flush();
                     }, 500)
                  },300)                   
               }
            },
            onmouseover: (id) => { },
            onmouseout: (id) => { }
         }
      }
   }

   componentDidMount() {
      $(".c3-chart-line").removeAttr("style");
      $('.c3-legend-item').removeAttr("style");
   }

   render() {
      return (
         <article id="Home">
            <h1>Home</h1>
            <section className="description">
               <h4>Description: </h4>
               <ul>
                  <li>The list of questions locates in fifth menu item "Ratings".</li>
                  <li>The list of products locates in third menu item "Products".</li>
                  <li>Total information about product storage locates in left sidebar, click on three circles button to reveal it.</li>
                  <li>In left corner of the main menu icon by pressing on which authorization form will appear, login - "Admin", password - "1111".
                     <ul>
                        <li>In admin mode item "Support" changes to "Admin tools".</li>
                        <li>Form for product adding becomes available - right sidebar.</li>
                        <li>In item "Products" delete button becomes available.</li>
                        <li>Appears opportunity of traveling between states of the products vault.</li>
                     </ul>
                  </li>
                  <li>Website is adaptable, try to change window size.</li>
                  <li><a href="https://github.com/Flairax/Template"> GitHub project</a></li>
               </ul>
               <C3Chart 
                  data={this.data} 
                  legend={this.legend} 
                  tooltip = {this.tooltip}
               />
            </section>
         </article>
      );
   }

}