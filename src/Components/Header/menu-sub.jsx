import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

/*=============Components=============*/
import Ref from './ref';

/*=============Images=============*/
import arrow from '../Assets/Header/Images/arrow.svg';

export default class Menu_sub extends PureComponent {
   constructor(props){
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
      
   toggle = () => {
      this.setState(prevState => {
         return {
            btnClass: prevState.btnClass === "" ? "RL-menu-sub-CLK" : "",
            blockClass: prevState.blockClass === "" ? "menu-sub-RVL" : "",
         };
      });
   }

   /*------------Ref click------------*/
   refClick = () => {
      this.props.closeParent();
      document.documentElement.scrollTop = 0;
   }

   /*================RENDER==================*/
   render() {
      return (
         <li className="points-main-openable">
            <Link 
               to={`/`+this.props.name} 
               className="ref-main"
               onClick={this.refClick}
            >{this.props.name}</Link>
            
            {/*=============Revealer=============*/}
            <div className={"RL-menu-sub "+this.state.btnClass} onClick={this.toggle}>             
               <span></span>
               <img src={arrow} alt="arrow" className="arrow" />
            </div>

            {/*=============Sub menu=============*/}
            <ul className={"menu-sub "+this.state.blockClass}>
               {this.props.subPoints.map(subPoint => {
                  return (
                     <Ref 
                        key={subPoint.id} 
                        link={"/"+subPoint.name} 
                        name={subPoint.name} 
                        type="ref-sub" 
                        closeParent={this.props.closeParent}
                     />
                  )        
               })}
            </ul>
         </li>
      );
   }
}

