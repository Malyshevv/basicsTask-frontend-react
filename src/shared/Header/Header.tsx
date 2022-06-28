import React, {useEffect, useState} from 'react';
import styles from './header.css';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import Cookies from "js-cookie";
import axios from "axios";
import {loginRequestError, loginRequestSuccess} from "../../utils/redux/User/Login/actionLogin";
import {apiUrl} from "../../../config/api.config";


export function Header() {
    const token = useSelector<RootState, string>(state => state.token)

    const logout =(event: React.MouseEvent<HTMLElement>) => {
        const url = `${apiUrl}/api/auth/logout`;

        let config = {
            url: url,
            method: 'POST',
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        }

        axios(config)
            .then((resp) => {
                Cookies.remove('token');
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
            });
    }

  return (
      <header className={styles.header}>
          <div className={styles.content}>
              <h3>List User Site</h3>
              <ul>
              <li><Link to='/'>Home</Link></li>
                  {token && (<li><Link to='/accounts'>Accounts</Link></li>)}
                  {!token && (<li><Link to='/signup'>Signup</Link></li> )}
                  {!token && (<li><Link to='/login'>Login</Link></li> )}
              </ul>
              {token && ( <button className={styles.logout} onClick={logout}>Logout</button> )}
          </div>
      </header>
  );
}
