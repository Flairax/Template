import React, { PureComponent } from 'react';

/*=============Images=============*/
import loomp from '../Assets/Header/Images/loomp.svg';

import { closeACT, toggleACT } from './shared.ACT';

export default class Searcher extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         btnClass: "",
         blockClass: ""
      }
   }

   componentWillReceiveProps(){
      this.close();
   }

   /*=============Handlers=============*/
   close = () => closeACT(this)
   toggle = () => toggleACT(this)

   /*================RENDER==================*/
   render() {
      return (
         <aside>
            {/*=============Revealer=============*/}
            <button className={"RL-searcher"+this.state.btnClass} onClick={this.toggle}>
               <img src={loomp} alt="loomp" />
            </button>

            {/*=============Searcher form=============*/}
            <form className={"searcher"+this.state.blockClass}>
               <input type="search" placeholder="Enter query" />
               <button type="submit">Search</button>
            </form>
         </aside>
      );
   }
}