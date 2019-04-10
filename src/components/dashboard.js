import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';
import logo from "../logo.png";

import one from "../imgs/01.jpg";

export default class Dashboard extends Component {

    render() {
        return (
            <div className="page-content bg-secondary">

                <br></br><br></br>
             <div class="block">
                 <div class="block-title">

                     &emsp;&emsp;
                     <a className="navbar-brand" align="center">
                         <img src={one} width="70%" height="70%"  />
                     </a>
                </div>

             </div>
                <br></br>
                <br></br> <br></br> <br></br> <br></br> <br></br>
                </div>



     )
 }
 }