import React, { Component } from 'react';
import '../Style/Css/footer.scss';

export default class Footer extends Component {
  /*componentDidMount(){
    const parallax = document.createElement("script");

    parallax.src = "./Scripts/parallax.js";
    parallax.async = true;
    parallax.type = "text/javascript";
    parallax.className = "Mountedparallax";

    document.body.appendChild(parallax);
  }
  
  componentWillUnmount(){
    const parallax = document.createElement("script");
    parallax.className = "Mountedparallax";

    document.body.removeChild(parallax);
  }*/

  render() {
    return (
      <footer>
        Footer
      </footer>
    );
  }
}
