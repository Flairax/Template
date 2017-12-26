import React, { Component } from 'react';

/*================Images==================*/
import deleter from '../Assets/Main/Images/deleter.svg'

export default class Modal extends Component {
   constructor(props) {
      super(props);
      this.state = {        
         shadow: "",
         info: ""
      }     
   }

   /*================Lifecycle==================*/  
   componentDidMount(){
      if(this.props.opened === true){
         this.open();
      }
   }

   componentWillReceiveProps(nextProps){
      console.log("Props reciving", nextProps)
      if(nextProps.opened !== this.props.opened){
         if(nextProps.opened){
            this.open();
         }else{
            this.close();
         }
      }
   }

   /*================Handlers==================*/    
   open = () => {
      this.setState({                    
         shadow: "modal-shadow-RVL",
         info: "modal-RVL",
      });
   }

   close = () => {
      this.setState({          
         shadow: "",
         info: "",
      });
   }

   /*================RENDER==================*/
   render() {
      return (
         <dialog className={`modal ${this.state.shadow}`}>
            <section className={`window ${this.props.type ? this.props.type : "info"} ${this.state.info}`}>
               {this.props.children}
               {/*================Closer type==================*/
               this.props.closeBy === "button" ? 
                  <button onClick={this.props.callback}>Understand</button>
                  : 
                  <img 
                     src={deleter} 
                     alt="deleter" 
                     className="deleter"
                     onClick={this.props.callback}
                  />
               }
            </section>
         </dialog>
      );
   }
}