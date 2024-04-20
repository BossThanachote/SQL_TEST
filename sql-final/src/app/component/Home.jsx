'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8081/delete/ู${id}`)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }

    
  return (
    <div className='flex justify-center items-center bg-slate-600 h-full'>
        <div className='bg-white rounded w-50 px-10'>
            <h2 className='my-app'>My App</h2>
            <div className='flex justify-center py-5'>
            <Link to="/create" className='btn-add flex justify-center'>Add +</Link>
            </div>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='py-5'>
                    {data.map((d ,i) => (
                        <tr key={i}>
                            <td className='px-10'>{d.name}</td>
                            <td className='px-10'>{d.phone}</td>
                            <td className='px-10'>{d.email}</td>
                            <td className='flex gap-3'>
                                <Link to={`/update/${d.id}`} className='btn-update'>Update</Link>
                                <button onClick={e => handleDelete(d.id)} className='btn-delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home