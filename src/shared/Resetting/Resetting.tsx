import React,{useState, useEffect} from 'react';
import styles from './resetting.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loginRequestAsync} from "../../utils/redux/User/Login/reducerLogin";
import {RootState} from "../../utils/redux/reducer";
import {MainLogo} from "../../assets/svg/MainLogo";
import {InputLabel} from "../../components/InputLabel";
const md5 = require('md5');


export function Resetting() {

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

    const data = {
      email: email,
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

          <button className={styles.button} type="submit">Сбросить пароль</button>

        </form>
      </div>
  );
}
