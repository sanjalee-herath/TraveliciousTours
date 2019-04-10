import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

export default class Dashboard extends Component {

    render() {
        return (
            <div id="page-content">
                <div class="content-header">
                    <div class="header-section">
                        <br></br>
                        <h1>
                            <i class="gi gi-dashboard"></i>Dashboard
                        </h1>
                    </div>
                </div>
                        <ul class="breadcrumb breadcrumb-top">
                            <li><a href="../home.php">Home</a></li>
                             <li>Dashboard</li>
                        </ul>
             <div class="block">
                 <div class="block-title">


                    <h2>Traveller</h2>
                </div>

                <div class="block-content">
                    <form id="form-main" name="form-main" action="dashboard.php" method="post" class="form-horizontal form-bordered">
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="from">From</label>
                        <div class="col-md-4">
                               <input type="text"
                                      id="from"
                                      name="from"
                                      class="form-control"
                                      placeholder="yyyy-mm-dd"
                               />
                        </div>

                            <label class="col-md-2 control-label" for="to">To</label>
                                <div class="col-md-4">
                                   <input type="text"
                                          id="to"
                                          name="to"
                                          class="form-control"
                                          placeholder="yyyy-mm-dd"
                                   />
                                </div>
                        </div>

                            <div class="form-group form-actions">
                                <div class="col-md-12">
                                    <button type="submit"
                                            class="btn btn-success btn-sm primary-btn pull-right">
                                            <i class="fa fa-angle-right"></i>
                                        Submit
                                    </button>
                                    <button type="reset"
                                            class="btn btn-warning btn-sm">
                                        <i class="fa fa-repeat"></i>
                                        Reset
                                    </button>
                                </div>
                            </div>
                    </form>
                </div>

            </div>
   
    </div>
     )
 }
 }