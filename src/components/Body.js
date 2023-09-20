import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';


const Body = () => {
    
  return (
    <div>
        {/* <RouterProvider router={appRouter} /> */}
    </div>
  )
}

export default Body