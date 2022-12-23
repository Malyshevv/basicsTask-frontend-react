import React, {useState, useEffect} from 'react';
import './AdministrativePanel .css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function AdministrativePanel() {

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
      <div className="AdministrativePanel__container">
          <h1>AdministrativePanel</h1>

      </div>
    );
}
