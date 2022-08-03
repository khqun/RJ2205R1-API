import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function CreateNewContact() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        phone: ' ',
        name: ' ',
        email: ' ',
        avatar: ''
    })
    let params = useParams();
    const navigateToContact = () => {
        navigate('/')
    }
    const handleSubmission = () => {
        const fd = new FormData();
        // Tạo data để gửi lên server
        fd.append("file", user.avatar);
        axios
            .post("https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts", fd)
            .then(res => {
                console.log(res.data.Url);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const saveClick = async () => {
        if (user.avatar) {
            await handleSubmission()
        }
        await alert('post thanh cong')
        navigateToContact()
    }
    useEffect(() => {
        if (Object.keys(params).length) {
            axios({
                method: 'get',
                url: `https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${params.userId}`,
            })
                .then(function (response) {
                    let userData = response.data;
                    console.log(userData);
                    setUser({
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone,
                        avatar: userData.image
                    })
                    console.log(user);
                }).catch(err => {
                    throw err
                })
        }
    }, [params])
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts',
            data: {
                user
            }
        })
            .then(function (response) {
                console.log(response);
            }).catch(err => {
                throw err
            })
    }
    return (
        <div className="container">
            <div>
                <div className="header">
                    <h1>Add a new book</h1>
                </div>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="input-comp">
                            <label >Name</label>
                            <div >
                                <input name="name" type='text' value={user.name || ' '} onChange={handleChange} className="form-control input-books" placeholder="Name" />
                            </div>
                        </div>
                        <div className="input-comp">
                            <label>Email</label>
                            <div>
                                <input name="email" type='text' value={user.email || ' '} onChange={handleChange} className="form-control input-books" placeholder="Email" />
                            </div>
                        </div>
                        <div className="input-comp">
                            <label>Phone</label>
                            <div>
                                <input name="phone" type='text' value={user.phone || ' '} onChange={handleChange} className="form-control input-books" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="input-comp">
                            <label>Upload Avatar</label>
                            <div>
                                <input type="file"
                                    id="avatar" name="avatar"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="input-comp">
                            <button type="submit" className="btn btn-lg btn-success" onClick={saveClick}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}