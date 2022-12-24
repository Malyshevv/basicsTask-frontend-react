import React, {useState, useEffect} from 'react';
import './PassengerTrafficRoute.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function PassengerTrafficRoute() {

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
      <div className="PassengerTrafficRoute__container">
          <h1>PassengerTrafficRoute</h1>

      </div>
    );
}
