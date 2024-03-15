import { useState } from 'react';
import './Form.css';

function Form() {
    let [formData, setFormData] = useState({
        userName: 'kaheel',
        password: '12345'
    });

    let handleInputChange = (event) => {

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        setFormData((currData) => {
            return { ...currData, [fieldName]: fieldValue };
        });
    };

    let onSubmition = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            userName: "",
            password: ""
        })
    };

    return (
        <div className='container mx-auto'>
            <h2 className='text-xl font-bold'>Form</h2>
            <form onSubmit={onSubmition}>
                <div className='grid grid-cols-2 gap-4 mb-3'>
                    <div>
                        <label for='userName' className='block'>User Name</label>
                        <input onChange={handleInputChange} type='text' id='userName' value={formData.userName} className='w-full border-gray-300 bg-rose-500 px-4 py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' name='userName'></input>
                    </div>

                    <div>
                        <label for='password' className='block'>Password</label>
                        <input type='password' onChange={handleInputChange} value={formData.password} id='password' className='w-full border-gray-300 bg-rose-500 px-4 py-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' name='password'></input>
                    </div>
                </div>

                <div className='grid grid-cols-1'>
                    <div>
                        <input type='submit' value='Save' className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'></input>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Form