import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AdminPage extends Component{
   render(){
      return(
         <article>
            <h1>Administrator page</h1>

         </article>
      )
   }
}

function matchDispatchToProps(dispatch){
   return bindActionCreators({}, dispatch);
}

export default connect(
   state => ({

   })
, matchDispatchToProps)(AdminPage)