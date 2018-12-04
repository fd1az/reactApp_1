import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
        navLinks : [
            {
                link:"/",
                clase:"active",
                text:"home"
            },
            {
                link:"#news",
                clase:"",
                text:"Categorias"
            },
            {
                link:"#contact",
                clase:"",
                text:"Blog"
            },
            {
                link:"#home",
                clase:"derecha",
                text:"Ingresar"
            },
            {
                link:"#home",
                clase:"derecha",
                text:"Registro"
            } 
         ] 
        
    }
  }  
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
        <ul>
            {
                this.state.navLinks.map((obj,i) =>{
                    return (<li key={i} className={obj.clase} >
                                <Link className={obj.clase} to={obj.link} >{obj.text}</Link>
                            </li>)
                })
            } 
        </ul>
        </header>
      </div>
    );
  }
}

export default Header;