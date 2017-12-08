import React, { Component } from 'react';

export default class Footer extends Component {
  componentDidMount(){
    const menuShifter = document.createElement("script");

    menuShifter.src = "./Scripts/menuShifter.js";
    menuShifter.async = true;
    menuShifter.type = "text/javascript";
    menuShifter.className = "MountedMenuShifter";

    document.body.appendChild(menuShifter);
    
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

    const menuShifter = document.createElement("script");
    menuShifter.className = "MountedMenuShifter";

    document.body.removeChild(menuShifter);
  }

  render() {
    return (
      <footer>
        Footer
      </footer>
    );
  }
}
