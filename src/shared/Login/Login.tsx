import React,{useState, useEffect} from 'react';
import styles from './login.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loginRequestAsync} from "../../utils/redux/User/Login/reducerLogin";
import {RootState} from "../../utils/redux/reducer";
import {MainLogo} from "../../assets/svg/MainLogo";
import {TrolleyBusLogo} from "../../assets/svg/TrolleyBusLogo";
import {BusLogo} from "../../assets/svg/BusLogo";
import {TramLogo} from "../../assets/svg/TramLogo";
import {InputLabel} from "../../components/InputLabel";
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
          <div className={styles.mainLogo}>
            <Link to="/">
              <MainLogo />
            </Link>
          </div>
          {errorMessage && (
              <div className={styles.alertError}> {errorMessage} </div>
          )}

          <InputLabel name={'email'} type={'email'} label={'Email' } required />
          <div style={{margin: '10px'}} />
          <InputLabel name={'password'} type={'password'} label={'Пароль'} required />

          <div className={styles.rememberContainer}>
            <input className={styles.customCheckbox}  type="checkbox" id="checkbox"
                   name="_remember_me" value="on"/>
            <label htmlFor="checkbox">Запомнить меня</label>
          </div>

          <button className={styles.button} type="submit">Войти</button>

          <div className={styles.linkForm}>
            <Link to="/signup">Регистрация</Link>
            <Link to="/signup">Забыли пароль?</Link>
          </div>

          <div>
            <h2 className={styles.tagline}>Умный</h2>
            <h2 className={styles.tagline}>транспорт</h2>
          </div>

          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <TrolleyBusLogo/>
            </div>
            <div className={styles.logo}>
              <BusLogo/>
            </div>
            <div className={styles.logo}>
              <TramLogo/>
            </div>
          </div>

        </form>
      </div>
  );
}
