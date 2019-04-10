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
                        <th>Tour Name</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hill Country Tours</td>
                        <td>
                            <Link

                                to="/hillCountry"

                            >View More Details</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Beach Tours</td>
                        <td>
                            <Link

                                to="/register"

                            >View More Details</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Wildlife & Adventure Tours</td>
                        <td>
                            <Link

                                to="/register"

                            >View More Details</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Cultural Tours</td>
                        <td>
                            <Link

                                to="/register"

                            >View More Details</Link>
                        </td>
                    </tr>
                    </tbody>


                </table>
            </div>
        )
    }
}