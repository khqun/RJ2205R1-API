import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = (e) => {
        e.prevenDefault();
        const user = {
            name: this.state.name
        }
        axios
            .post(`https://jsonplaceholder.typicode.com/users`, {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                throw error
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}