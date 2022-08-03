import axios from "axios";
import { useState} from 'react';
export default function CreateToDo() {
    const [todoTask, setTodoTask] = useState();
    const handleChange = (e) => {
        setTodoTask(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await alert('success');
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/todos',
            data: {
                todoTask
            }
        }).then(
            res => {
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
        }).finally(()=>{
            setTodoTask('')
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="task" type='text' placeholder="Your Task" value={todoTask} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
} 