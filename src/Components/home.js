import React, { Component } from 'react';
import '../Style/Css/home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
    
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <article>
        <h1>Home</h1>
        <details>
          <summary>Информация об авторе</summary>
          <p>Бендер Родригез</p>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
       </details>
      </article>
    );
  }
}
