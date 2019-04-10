import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class fareDetails extends Component {

    render() {
        return (
            <div class='container'>

                <h3>Fare Details</h3>


                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Tour Package Name</th>
                            <th scope="col">Number of Passengers</th>
                            <th scope="col">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Nuwaraeliya Tour Package</th>
                                <td>3</td>
                                <td>36000LKR</td>
                            </tr> 
                        </tbody>
                    </table>
            </div>
        )
    }
}