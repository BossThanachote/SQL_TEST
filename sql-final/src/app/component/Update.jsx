// Update.js

import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    // สร้าง Refs สำหรับ input fields
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { name, phone, email })
            .then(res => {
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='create-template'>
            <div className='create-root-template w-[500px]'>
                <form onSubmit={handleSubmit}>
                    <h2 className='flex justify-center font-bold'>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="" className='pr-2 font-bold'>Name</label>
                        {/* ใช้ Ref ใน input field */}
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control'
                            ref={nameRef} // กำหนด Ref ให้กับ input field
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="" className='pr-2 font-bold'>Phone</label>
                        {/* ใช้ Ref ใน input field */}
                        <input
                            type="text"
                            placeholder='Enter Phone Number'
                            className='form-control'
                            ref={phoneRef} // กำหนด Ref ให้กับ input field
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="" className='pr-2 font-bold'>Email</label>
                        {/* ใช้ Ref ใน input field */}
                        <input
                            type="text"
                            placeholder='Enter Email'
                            className='form-control'
                            ref={emailRef} // กำหนด Ref ให้กับ input field
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn-add'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
