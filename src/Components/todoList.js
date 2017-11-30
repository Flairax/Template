import React, { Component } from 'react';
import { connect } from 'react-redux';

import { select } from '../Actions/userActions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  showList (){
    console.log(this.props.todoStore);
    return this.props.todoStore.map(todo => {
      return(
        <li onClick={() => this.props.select(todo)}
        key = {todo.id}>{todo.text}</li>
      );
    });
  }

  
  render(){
    return (
      <section>
        <h1>Todos:</h1>
        <ol>
          {this.showList()}
        </ol>
      </section>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({select: select}, dispatch)
}

export default connect(
  state => ({ 
    todoStore: state.todoRed
  }),matchDispatchToProps
  
)(TodoList);