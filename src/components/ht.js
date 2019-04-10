import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Register from "./ht";
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
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Hill Country Tour</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        Kandy, the hill capital can be accessed by both land and air.
                        The most popular land route is by train which offers amazing scenic views of the countryside.
                        Trains leave daily from the Fort Railway Station in Colombo.
                        Kandy is also accessible by air greatly reducing travelling time.

                        The town of Nuwara Eliya still retains much of its British colonial charm that has earned it the nickname Little England.
                        Nestled 2,000 metres above sea level it is one of the coldest regions of Sri Lanka with an annual average temperature of 15 degrees Celsius.
                    </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}