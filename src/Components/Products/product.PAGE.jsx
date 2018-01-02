import React from 'react';
import { connect } from 'react-redux';

import ProductItem from './product.ITEM';

const ProductPage = (props) => {
   return (
      <article>
         <section>
            <ProductItem product={props.selected} />
         </section>
      </article>
   )
}

/*=============Store connection============*/
export default connect(store => ({
   selected: store.products.selected,
   acces: store.roles.CurrentUser.accesability, 
}))(ProductPage);