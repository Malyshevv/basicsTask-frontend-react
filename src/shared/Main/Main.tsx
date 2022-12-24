import React, {useState, useEffect} from 'react';
import './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LeftBar} from "../Content/LeftBar";
import {RightBar} from "../Content/RightPanel";


export function Main() {

    const location = useLocation()
    const navigate = useNavigate()
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        if(location.pathname === '/' && token) {
            navigate('/home')
        } else {
            navigate('/login')
        }
    },[])

    return (
      <div className="Main__container">
          <LeftBar/>
          <RightBar/>
      </div>
    );
}
