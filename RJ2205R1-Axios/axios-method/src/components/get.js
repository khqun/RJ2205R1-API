import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        person: []
    }
    componentDidMount() {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const person = res.data
                this.setState({ person })
            })
            .catch(error => console.log(error))
    }

    render(){
        return (
            <ul>
                {this.state.person.map((person)=> (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        )
    }
}