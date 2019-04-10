import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePassportNo = this.onChangePassportNo.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_Name:'',
            last_Name:'',
            gender:'',
            country:'',
            passportNo:'',
            email:'',
            contact_no:'',
            username: '',
            password: '',
            user_type: 'tourist'

        }
    }
    onChangeFirst(e) {
        this.setState({
            first_Name: e.target.value
        });
    }

    onChangeLast(e) {
        this.setState({
            last_Name: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }
    onChangePassportNo(e) {
        this.setState({
            passportNo: e.target.value
        });
    }
    onChangeContactNo(e) {
        this.setState({
            contact_no: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
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

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Username: ${this.state.username}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`User_Type: ${this.state.user_type}`);


        const register = {
            username: this.state.username,
            password: this.state.password,
            user_type: this.state.user_type

        }

        axios.post('http://localhost:4000/tourism/register', register)
            .then(res => console.log(res.data));

        this.setState({
            first_Name:'',
            last_Name:'',
            gender:'',
            country:'',
            passportNo:'',
            email:'',
            contact_no:'',
            username: '',
            password: '',
            user_type: 'tourist'
        })
    }

    render() {
        return (
            <div id="page-content">
                <div className="content-header">
                    <div className="header-section">
                        <br></br>
                        <h1 align="center">
                            <i className="gi gi-dashboard"></i>Welcome to the Traveller
                        </h1>
                    </div>
                </div>
            <div className="row">
                <div className="form-horizontal form-bordered col-sm-6" >
                    <br></br>
                    <h3>Sign Up</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-md-2 control-label"> First Name: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.first_Name}
                                       className="form-control"
                                       onChange={this.onChangeFirst}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Last Name: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.last_Name}
                                       className="form-control"
                                       onChange={this.onChangeLast}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Gender: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.gender}
                                       className="form-control"
                                       onChange={this.onChangeGender}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Country: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.country}
                                       className="form-control"
                                       onChange={this.onChangeCountry}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Last Name: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.last_Name}
                                       className="form-control"
                                       onChange={this.onChangeLast}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <input type="submit" value="Login" className="btn btn-primary"/>
                                &emsp;&emsp;
                                <Link to="/register">
                                    <button type="button">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="form-horizontal form-bordered col-sm-6" >
                    <br></br>
                    <h3>Sign Up</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Enter username: </label>
                            <div className="col-md-4">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.username}
                                       className="form-control"
                                       onChange={this.onChangeUsername}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-2 control-label">Enter password: </label>
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
                            <div className="col-md-12">
                                <input type="submit" value="Login" className="btn btn-primary"/>
                                &emsp;&emsp;
                                <Link to="/register">
                                    <button type="button">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}