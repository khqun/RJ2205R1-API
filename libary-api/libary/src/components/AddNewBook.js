import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddNewBook() {
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [quantity, setQuantity] = useState()
    let params = useParams();
    const navigateToLibary = () => {
        navigate('/')
    }
    const saveClick = async (e) => {
  
        await alert('post thanh cong');
        navigateToLibary()
    }
    useEffect(() => {
        if (Object.keys(params).length) {
            axios({
                method: 'get',
                url: `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${params.bookId}`,
            })
                .then(function (response) {
                    let book = response.data;
                    setTitle(book.title)
                    setQuantity(book.quantity)
                }).catch(err => {
                    throw err
                })
        }

    }, [params])
    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const quantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books',
            data: {
                title,
                quantity,
                avc: 'abc'
            }
        })
            .then(function (response) {
                console.log(response);
            }).catch(err => {
                throw err
            }).finally(

        )
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
                            <label >Title</label>
                            <div >
                                <input type='text' value={title} onChange={titleChange} className="form-control input-books" placeholder="Title" />
                            </div>
                        </div>
                        <div className="input-comp">
                            <label>Quantity</label>
                            <div>
                                <input type='text' value={quantity} onChange={quantityChange} className="form-control input-books" placeholder="Quantity" />
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