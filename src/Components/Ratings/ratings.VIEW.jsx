import React, { Component } from 'react';

/*================Components==================*/
import Modal from '../Modal/modal';
import Ratings from './ratings';

/*================Jauery==================*/
import $ from 'jquery'

export default class RatingsView extends Component {
   
   componentDidMount(){
      $(".modal#start").addClass("modal-RVL");
   }
   /*================RENDER==================*/
   render() {
      return (
         <article>
            <Ratings />
            <Modal order="start" text = {[
               <h4 key="h4">Hello</h4>,
               <p key="p">Here you will see the list of games, which we need your opinion about,
                     so tell as how much do you like every one of them by clicking on stars,
                     <br /> 1 - Totaly dislike
                     <br /> 5 - I adore it!
               </p>
            ]} closeBy="button"/>
            <Modal order="finish" text = {[
               <h4  key="h4">Job is done!</h4>,
               <p key="p">
                  You can start over to see what marks you gave an change them if needed
               </p>
            ]} closeBy="button"/>
         </article>
      );
   }
}