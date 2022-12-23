import React, {useState, useEffect} from 'react';
import './PassengerTrafficTransport.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function PassengerTrafficTransport() {

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
      <div className="PassengerTrafficTransport__container">
          <h1>PassengerTrafficTransport</h1>

      </div>
    );
}
