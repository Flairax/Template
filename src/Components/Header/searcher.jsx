import React, { PureComponent } from 'react';

/*=============Images=============*/
import loomp from '../Assets/Header/Images/loomp.svg';


export default class Searcher extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         btnClass: "RL-searcher",
         blockClass: "searcher"
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
            btnClass: prevState.btnClass === "RL-searcher" ? 
               "RL-searcher-CLK" : "RL-searcher",
            blockClass: prevState.blockClass === "searcher" ? 
               "searcher-RVL" : "searcher",
         };
      });
   }

   /*================RENDER==================*/
   render() {
      return (
         <aside>
            {/*=============Revealer=============*/}
            <button className={this.state.btnClass} onClick={this.reveal}>
               <img src={loomp} alt="loomp" />
            </button>

            {/*=============Searcher form=============*/}
            <form className={this.state.blockClass}>
               <input type="search" placeholder="Enter query" />
               <button type="submit">Search</button>
            </form>
         </aside>
      );
   }
}