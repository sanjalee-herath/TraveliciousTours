import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class packageDetails extends Component {

    render() {
        return (
            <div id="page-content">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Package name</th>
                            <th scope="col">Price(per person)</th>
                            <th scope="col">Nights</th>
                            <th scope="col">Inclusions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nuwaraeliya Tour Package</td>
                            <td>12000LKR</td>
                            <td>3Nights</td>
                            <td>Meals, Accomodation, Transfer, Sightseeing</td>
                        </tr>
                        <tr>
                            <td>Riverston Tour</td>
                            <td>12000LKR</td>
                            <td>3Nights</td>
                            <td>Meals, Accomodation, Transfer, Sightseeing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}