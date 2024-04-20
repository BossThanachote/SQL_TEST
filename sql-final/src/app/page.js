'use client'
import React from 'react'
import Home from './component/Home'
import Create from './component/Create';
import Update from './component/Update';
import "./globals.css";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

export default function Main(){
    return(
        <main className='app'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
        </Routes>    
        </BrowserRouter>
        </main>
    )
}
