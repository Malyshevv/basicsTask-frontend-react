import React, {useState, useEffect} from 'react';
import './BroadcastVideo.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {Link} from "react-router-dom";

export function BroadcastVideo() {

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
      <div className="BroadcastVideo__container">
          <h1>BroadcastVideo</h1>
      </div>
    );
}
