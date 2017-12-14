import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/home';
import TodoView from './Todos/todoView';
import NotFound from './notFound';

import './Assets/main.sass';
import './Assets/root.sass';

import $ from 'jquery';
import * as MediaShifter from '../Header/MediaShifter/mediaShifter';

export default class Main extends Component { 
   componentDidMount(){
      const ADAPTIVE = window.matchMedia("(min-width: 700px)");

      /*====================================
            Adding / Removing nav fixation
        ====================================*/
      ADAPTIVE.addListener( changes => {
         if (changes.matches){
            window.addEventListener('scroll', MediaShifter.scroller);
         }else{
            window.removeEventListener('scroll', MediaShifter.scroller);
         }
      });

      if (window.matchMedia("(min-width: 700px)")){
          window.addEventListener('scroll', MediaShifter.scroller);
      } 
      
      /*=============================
            All refs points top
        =============================*/
      $("#Menu a").bind('click', () => {
         document.documentElement.scrollTop = 0;
         MediaShifter.hideMenus();
         $("#Menu").removeClass("opened-menu");
      });
   }
   
   /*=============================
            Hide #Menu on free 
            area click for mob
     =============================*/
   hideMainMenu(){
      if (window.matchMedia("(min-width: 700px)")){
         $("#Menu").removeClass("opened-menu");
         MediaShifter.hideMenus();
      }
   }
   
   render() {
      return (
         <main id="content" onClick={this.hideMainMenu}>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/news' component={TodoView} />
               <Route component={NotFound} />
            </Switch>
         </main>
      );
   }
}