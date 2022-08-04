import { useState, useEffect } from 'react';
import axios from 'axios'

function GetApi() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = axios.get('http://localhost:9001/api/users')
        const getArticle = axios.get('http://localhost:9001/api/articles')
        axios
            .all([getUsers, getArticle])
            .then(
                axios.spread((res1, res2) => {
                    const usersList = res1.data.map(user => {
                        return {
                            ...user,
                            articles: res2.data.filter(item => {
                                return item.user_id === user.id
                            })
                        }
                    })
                    setUsers(usersList)
                    console.log(users)
                })
            )
            .catch(err => {
                throw err
            })
            .finally(() => { })
    })
    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Article numbers</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td> {user.name} </td>
                            <td> {user.articles.length} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetApi;