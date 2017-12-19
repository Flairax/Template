import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Searcher extends Component {
   render() {
      return (
         <li className={this.props.type ==="ref-main" ?"points-main": ""}>
            <Link to={this.props.link}             
               className={
                  this.props.type ==="ref-main" ? "refs-main" : 
                  this.props.type ==="ref-sub" ? "refs-sub" : "Nan"}>{this.props.name}
            </Link>   
         </li>  
      );
   }
}