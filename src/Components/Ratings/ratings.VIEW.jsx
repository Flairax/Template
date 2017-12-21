import React, { Component } from 'react';

import Ratings from './ratings';

export default class ProductView extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <article>
            <Ratings />
         </article>
      );
   }
}