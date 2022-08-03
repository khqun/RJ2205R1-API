import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserDetails() {
    const { userId } = useParams();
    const isCreate = !userId;
    const [user, setUser] = useState({});

    useEffect(() => {
        if (userId) {
            axios
                .get(`http://localhost:9001/api/users/${userId}`)
                .then(user => {
                    setUser(user.data)
                })
                .catch(
                    error => {
                        throw error
                    }
                )
        }
    }, [userId])
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    function handleSubmit() {
        axios
            .post("http://localhost:9001/api/users", user)
            .then(res => {  
                alert(
                    `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
                        res.data
                    )} successfully!!!`
                );
            })
            .catch(err => {
                throw err;
            });
            console.log(user);
    }

    return (
        <div>
            <h1>User details</h1>
            <form method="GET" action="/users">
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={user.birthday || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}