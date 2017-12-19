import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Searcher extends Component {
   render() {
      return (
         <li className="points-main">
            <Link to={this.props.link} className="refs-main">{this.props.name}</Link>   
         </li>  
      );
   }
}