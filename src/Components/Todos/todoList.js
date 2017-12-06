import React, { Component } from 'react';

import { select } from './todoActions';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';

class TodoList extends Component{    
    showList(){        
        return this.props.todoStore.map(todo => {
            return(
                <li key = {todo.id} onClick = {() => this.props.select(todo)}>
                    {todo.text}
                </li>
            );     
        });
    }
    
    render(){
        return(
            <ul id="todoList">
                {this.showList()}
            </ul>
        );       
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select}, dispatch)
}

export default connect(
    state => ({ 
    todoStore: state.todos
}),matchDispatchToProps)(TodoList);