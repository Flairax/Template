import React, { Component } from 'react';

/*=============Images=============*/
import loomp from '../Assets/Header/Images/loomp.svg';


export default class Searcher extends Component {
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
   close = () =>{
      this.setState({
         btnClass: "",
         blockClass: "",
      });
   }

   reveal = () => {
      this.setState(prevState => {
         return {
            btnClass: prevState.btnClass === "" ? "RL-searcher-CLK" : "",
            blockClass: prevState.blockClass === "" ? "searcher-RVL" : "",
         };
      });
   }

   /*================RENDER==================*/
   render() {
      return (
         <aside>
            {/*=============Revealer=============*/}
            <button className={"RL-searcher " + this.state.btnClass} onClick={this.reveal}>
               <img src={loomp} alt="loomp" />
            </button>

            {/*=============Searcher form=============*/}
            <form className={"searcher " + this.state.blockClass}>
               <input type="search" placeholder="Enter query" />
               <button type="submit">Search</button>
            </form>
         </aside>
      );
   }
}