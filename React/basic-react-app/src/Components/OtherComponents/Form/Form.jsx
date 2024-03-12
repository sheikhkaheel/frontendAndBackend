import { useState } from 'react';
import './Form.css';

function Form() {
    let [formData,setFormData] = useState({
        userName : '',
        password : ''
    });

    let handleInputChange = (event) => {

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        setFormData((currData)=>{
            return {...currData,  [fieldName]: fieldValue};
        });
    };

    let onSubmition = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            userName : "",
            password : ""
        })
    };

    return (
        <div className='container'>
            <h2>Form</h2>
            <form onSubmit={onSubmition}>
                <div className='row mb-3'>
                    <div className='col'>
                        <label htmlFor='userName'>User Name</label>
                        <input onChange={handleInputChange} type='text' id='userName' value={formData.userName} className='form-control' name='userName'></input>
                    </div>

                    <div className='col'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' onChange={handleInputChange} value={formData.password} id='password' className='form-control' name='password'></input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <input type='submit' value='Save' className='btn btn-success form-control'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form