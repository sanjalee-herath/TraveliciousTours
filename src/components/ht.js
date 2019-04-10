import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Register from "./ht";
import f from "../imgs/06.jpg";
/*** try to backend
 const Todo = props => (
 <tr>
 <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
 <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
 <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
 <td>
 <Link to={"/edit/"+props.todo._id}>Edit</Link>
 </td>
 </tr>
 )*/

export default class TodosList extends Component {

    /**** try to backend

     constructor(props) {
        super(props);
        this.state = {todos: []};
    }

     componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

     componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

     todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }
     */
    render() {
        return (
            <div>&emsp;&emsp;
                <h3>Our Packages</h3>
                <br></br>
                <table  style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th width="15%">&emsp;&emsp;Hill Country Tour</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td width="85%" height="60%">
                        Kandy, the hill capital can be accessed by both land and air.
                        The most popular land route is by train which offers amazing scenic views of the countryside.
                        Trains leave daily from the Fort Railway Station in Colombo.
                        Kandy is also accessible by air greatly reducing travelling time.

                        The town of Nuwara Eliya still retains much of its British colonial charm that has earned it the nickname Little England.
                        Nestled 2,000 metres above sea level it is one of the coldest regions of Sri Lanka with an annual average temperature of 15 degrees Celsius.
                        </td>
                        </tr>
                    <tr width="15%">
                        <td></td>
                        <td width="85%" height="60%">

                        </td></tr>
                    <tr>
                        <td></td>
                        <td width="85%" height="60%">
                            <b> No of Nights : 5 </b>
                        </td></tr>
                    <tr>
                        <td></td>
                        <td width="85%" height="60%">
                            <b> Price per person (Rs): 6000 </b>
                        </td></tr>

                    </tbody>

                </table>
                <table>
                    <tr>
                        <td width="15%"></td>

                    </tr>
                </table>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src={f} width="70%" height="70%"  />

                <br></br>
                &emsp;&emsp; <Link
                    className="btn btn-pink"
                    role="button"
                    to="/booking"

                >
                    Book Now
                </Link>
            </div>
        )
    }
}