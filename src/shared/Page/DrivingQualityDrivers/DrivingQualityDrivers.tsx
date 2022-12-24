import React, {useState, useEffect} from 'react';
import './DrivingQualityDrivers.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function DrivingQualityDrivers() {

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
      <div className="DrivingQualityDrivers__container">
          <h1>DrivingQualityDrivers</h1>

      </div>
    );
}
