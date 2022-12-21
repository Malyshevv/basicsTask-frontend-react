import React, {useState, useEffect} from 'react';
import './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {MapHome} from '../MapHome'

export function Main() {

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
      <div className="Main__container">
          {/*<h1>Main Page</h1> <br/>*/}
          {/*<p><label>User Type:</label> {userType}</p>*/}
          <div style={{width: "20%", height: '100vh', zIndex: '1001'}} />
          <MapHome />
      </div>
  );
}
