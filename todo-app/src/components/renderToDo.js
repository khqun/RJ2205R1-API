import axios from 'axios';
import { useState, useEffect } from 'react';
export default function RenderToDo() {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setTodoList(res.data);
            }).catch((err) => {
                throw err
            }).finally(() => {
                setLoading(false);
            })
    }, [])
    const renderList = () => {
        return (
            todoList.map((job) => {
                return (
                    <li key={job.id}>{job.title}</li>
                )
            })
        )
    }
    if (loading) {
        return (
            <p>
                ...Loading
            </p>
        )
    }
    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}