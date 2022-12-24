import React, {useState, useEffect} from 'react';
import './DrivingQualityTransport.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function DrivingQualityTransport() {

    const [userType, setUserType] = useState('');
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        if (!token) {
            setUserType('anonymous')
        } else {
            setUserType('User')
        }
    }, [token]);

    return (
      <div className="DrivingQualityTransport__container">
          <h1>DrivingQualityTransport</h1>

      </div>
    );
}
