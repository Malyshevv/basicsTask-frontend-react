import React,{useState, useEffect} from 'react';
import styles from './login.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loginRequestAsync} from "../../utils/redux/User/Login/reducerLogin";
import {RootState} from "../../utils/redux/reducer";
const md5 = require('md5');

export function Login() {

  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const error = useSelector<RootState, any>((state) => state.user.error?.login);
  const loading = useSelector<RootState, any>((state) => state.user.loading);
  const user = useSelector<RootState, any>((state) => state.user.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error !== undefined) {
      setErrorMessage(error);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    let email = e.target.email.value;
    // @ts-ignore
    let password = e.target.password.value;

    const data = {
      email: email,
      password: password
    }
    // @ts-ignore
    dispatch(loginRequestAsync(data));
  }

  useEffect(() => {
    if (!loading && user) {
      window.location.href = '/'
    }
  }, [user, loading]);



  return (
      <div className={styles.main}>
        <form className={styles.form}  onSubmit={handleSubmit}>
          <div className={styles.group}>
            <h1>Вход!</h1>
            <p>Супер вход</p>
          </div>
          {errorMessage && (
              <div className={styles.alertError}> {errorMessage} </div>
          )}
          <div className={styles.group}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required/>
          </div>
          <div className={styles.group}>
            <label>Пароль</label>
            <input type="password" name="password" autoComplete="on" placeholder="Пароль" required/>
          </div>
          <button type="submit">Войти</button>
          <div className={styles.linkForm}>
            <Link to="/signup">Регистрация</Link>
          </div>
        </form>
      </div>
  );
}
