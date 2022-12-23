import React, {useState, useEffect} from 'react';
import './DrivingQualityDriverRating.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function DrivingQualityDriverRating() {

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
      <div className="DrivingQualityDriverRating__container">
          <h1>DrivingQualityDriverRating</h1>
      </div>
    );
}
