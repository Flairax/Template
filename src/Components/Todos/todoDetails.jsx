import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component{   
    render(){
        const todo = this.props.activeTodo;
        
        if(!todo)return(
            <p>Select something</p>
        )

        return(
            <div>
                <p>{todo.id}</p>
                <p>{todo.text}</p>
                <p>{todo.completed ? 
                    String.fromCharCode(10003) : 
                    String.fromCharCode(10060)}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        activeTodo: state.active
    };
}

export default connect(mapStateToProps)(Details);