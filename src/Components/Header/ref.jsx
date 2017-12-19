import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Searcher extends Component {
   render() {
      return (
         <li className={this.props.type === "ref-main" ? "points-main" : ""}>
            <Link to={"/"+this.props.name} className={this.props.type}>{this.props.name}</Link>   
         </li>  
      );
   }
}