import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import {Merge }from '../components/Merge'
import { Signup } from '../components/SignUp'

export default function Router() {
  return (
    <div>
        <Routes>
       <Route exact path="/" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/main" element={<Merge />} />
        {/*<Route exact path="/events" element={<Event />} />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </div>
  )
}
