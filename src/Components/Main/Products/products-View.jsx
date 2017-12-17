import React, { Component } from 'react';

import ProducList from './products-List';

export default class TodoView extends Component {
   render() {
      return (
         <article>
            <section>
               <h1>Products:</h1>
               <ProducList />
            </section>
         </article>
      );
   }
}