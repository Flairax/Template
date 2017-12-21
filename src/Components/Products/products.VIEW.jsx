import React, { Component } from 'react';

import ProducList from './products-List';

export default class ProductView extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <article>
            <h1>Products:</h1>
            <ProducList />
         </article>
      );
   }
}