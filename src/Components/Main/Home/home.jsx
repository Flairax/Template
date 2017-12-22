import React, { Component } from 'react';


export default class Home extends Component {
   render() {
      return (
         <article>
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
            </section>
         </article>
      );
   }

}