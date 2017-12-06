import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from './todoActions';

class TodoForm extends Component{   
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value: ''});
      }
    
    
    render(){
        return(       
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                <input type="submit" value="AddTodo"/>
            </form>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addTodo}, dispatch)
  }
  
export default connect(
    state => ({ 
      todoStore: state.todos
}),matchDispatchToProps)(TodoForm);