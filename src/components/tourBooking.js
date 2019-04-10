import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Register from "./register";
export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            user_type: ''

        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeUserType(e) {
        this.setState({
            user_type: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`User_Type: ${this.state.user_type}`);


        const login = {
            username: this.state.username,
            password: this.state.password,
            user_type: this.state.user_type

        }

        axios.post('http://localhost:4000/tourism/login', login)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
            user_type: ''
        })
    }

    render() {
        return (

            <div class="form-horizontal form-bordered bg-secondary" align="center">
                <br></br>
                <h3>Booking Tour Package</h3>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label class="col-md-2 control-label " ><b>Select Tour Package </b> </label>
                        <div className="col-md-4" >
                            <select name="option" className="form-control">
                                <option value=""></option>

                                <option value="hill1">Hill Country Tours</option>
                                <option value="beach1">Beach Tours</option>
                                <option value="widl1">Wildlife & Adventure Tours</option>
                                <option value="cult1">Cultural Tours</option>

                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label"><b> Customer Name </b></label>
                        <div className="col-md-4">
                            <input type="text"
                                   className="form-control"
                                   value={this.state.password}
                                   className="form-control"
                                   onChange={this.onChangePassword}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-2 control-label"> <b>No. of people attending </b> </label>
                        <div className="col-md-4">
                            <input type="number"
                                   className="form-control"
                                   placeholder="No of adults "
                                   value={this.state.password}
                                   className="form-control"
                                   onChange={this.onChangePassword}
                            />
                        </div>
                        <div className="col-md-4">
                            <input type="number"
                                   className="form-control"
                                   placeholder="No of children "
                                   value={this.state.password}
                                   className="form-control"
                                   onChange={this.onChangePassword}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label"><b> Staring Date </b> </label>
                        <div className="col-md-4">
                            <input type="date"
                                   class="form-control" placeholder="yyyy-mm-dd"
                                   value={this.state.password}
                                   className="form-control"
                                   onChange={this.onChangePassword}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">

                            &emsp;&emsp; <Link
                            className="btn btn-success primary-btn pull-right"
                            role="button"
                            to="/total"

                        >
                            Booking
                        </Link>

                        </div>
                    </div>
                </form>
                <br></br>
                <br></br> <br></br> <br></br> <br></br> <br></br>
            </div>
        )
    }
}