import React, {useState, useEffect} from 'react';
import './MediaPanelControl.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function MediaPanelControl() {

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
      <div className="MediaPanelControl__container">
          <h1>MediaPanelControl</h1>

      </div>
    );
}
