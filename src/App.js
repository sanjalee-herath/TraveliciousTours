import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Dashboard from "./components/dashboard";
import packages from "./components/tourPackages";
import Login from "./components/login";
import register from "./components/register";
import tourPackages from "./components/tourPackages";
import ht from "./components/ht";
import booking from "./components/tourBooking";
import total from "./components/fareDetails";

import logo from "./logo.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="page-container ">


                    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
                        <a className="navbar-brand">
                            <img src={logo} width="30" height="30"  />TraveliciousTours
                        </a>

                        <div className="collpase nav-collapse">
                            <ul className="navbar-nav mr-auto ">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link text-light">Dashboard</Link>
                                </li>
                                &emsp;&emsp;
                                <li className="navbar-item">
                                    <Link to="/packages" className="nav-link text-light">Tour Packages</Link>
                                </li>
                                &emsp;&emsp;
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link text-light">Contact Us</Link>
                                </li>
                                &emsp;&emsp;
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link text-light">About Us</Link>
                                </li>

                                &emsp;&emsp;
                                <li className="navbar-item" style={{align:"center"}}>
                                    <Link to="/login" className="nav-link text-light">Login/Sign Up</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>


                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login"  component={Login} />
                    <Route path="/packages" component={packages} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                    <Route path="/register" component={register} />
                    <Route path="/tourPackages" component={tourPackages} />
                    <Route path="/hillCountry" component={ht} />
                    <Route path="/booking" component={booking} />
                    <Route path="/total" component={total} />

                </div>

            </Router>


        );
    }
}

export default App;
