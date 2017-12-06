import React, { Component } from 'react';


import '../../Style/Css/todoList.scss';


import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoDetails from './todoDetails';

export default class TodoView extends Component {
    render(){
        return (
            <article>
                <section>
                    <h1>Add todo:</h1>
                    <TodoForm />
                </section>
                <hr/>
                <section>
                    <h1>Todos:</h1>
                    <TodoList />
                </section>
                <hr/>
                <section>
                    <h1>Details: </h1>
                    <TodoDetails />
                </section>
            </article>
        );
    }
}
