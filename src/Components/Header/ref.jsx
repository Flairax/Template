import React,{Component} from 'react';
import { Link } from 'react-router-dom';

export default class Ref extends Component{
   /*=============Action handlers=============*/ 
   click = () => {
      this.props.closeParent();
      document.documentElement.scrollTop = 0;
   }
  
   /*================RENDER==================*/
   render(){
      return (
         <li className={this.props.type === "ref-main" ? "points-main" : ""}>
            <Link
               to={"/" + this.props.name}
               className={this.props.type}
               onClick={this.click}
            >{this.props.name}</Link>
         </li>
      )
   }  
}

