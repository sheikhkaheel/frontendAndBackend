import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [todoItem, setTodoItem] = useState([{ task: 'SampleTask', id: uuidv4(), completed: false }]);
    const [inputItem, setInputItem] = useState('');

    const updateInput = (event) => {
        setInputItem(event.target.value);
    };

    const submitTodo = (event) => {
        event.preventDefault();
        const newTask = { task: inputItem, id: uuidv4(), completed: false };
        setTodoItem([...todoItem, newTask]);
        setInputItem('');
    };

    const deleteTask = (id) => {
        const newList = todoItem.filter((item) => item.id !== id);
        setTodoItem(newList);
    };

    const completeTask = (id)=> {
        const newList = todoItem.map((item) => {
            if(item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodoItem(newList);
    };

    return (
        <div className="container-lg">
            <h1 className="text-5xl pt-10 text-emerald-400 text-center">Todo List</h1>
            <div className="my-5 text-center">
                <input className="mr-4 py-2 px-5 rounded-xl" type="text" value={inputItem} onChange={updateInput} />
                <input type="submit" className="bg-lime-500 rounded-xl px-5 py-2" onClick={submitTodo} />
            </div>
            <div className="bg-neutral-800 mx-40 px-10 py-3">
                <ul>
                    {todoItem.map((item) => (
                        <li className={`my-3 ${item.completed ? 'line-through' : ''}`} key={item.id}>
                            {item.task}
                            <span onClick={() => deleteTask(item.id)}>
                                <i className="fa-solid fa-trash mx-4 text-rose-500"></i>
                            </span>
                            <span onClick={() => completeTask(item.id)}>
                                <i className="fa-solid fa-square-check text-green-400"></i>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
