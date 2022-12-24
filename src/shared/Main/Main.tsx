import React, {useState, useEffect} from 'react';
import './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LeftBar} from "../Content/LeftBar";
import {RightBar} from "../Content/RightBar";


export function Main() {

    const location = useLocation()
    const navigate = useNavigate()
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        if(['/','/login','/signup','/resetting'].includes(location.pathname) && token) {
            navigate('/home')
        } else {
            navigate('/login')
        }
    },[])

    return (
      <div>
          <LeftBar/>
          <RightBar/>
      </div>
    );
}
