import React, {useState, useEffect} from 'react';
import './DrivingQualityBranches.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function DrivingQualityBranches() {

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
      <div className="DrivingQualityBranches__container">
          <h1>DrivingQualityBranches</h1>
      </div>
    );
}
