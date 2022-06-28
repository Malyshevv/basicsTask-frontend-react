import React, {useState, useEffect, ReactEventHandler, ChangeEvent} from 'react';
import styles from './signup.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {SignupRequestAsync} from "../../utils/redux/User/signup/reducerSignup";

const md5 = require('md5');

export function Signup() {
  let location = useLocation()
  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [pendingData, setPendingData] = useState({})
  const [avatartState, setAvatart] = useState<any>()

  const error = useSelector<RootState, any>((state) => state.user.error?.signup);
  const loading = useSelector<RootState, any>((state) => state.user.loading);
  const user = useSelector<RootState, any>((state) => state.user.data);

  const dispatch = useDispatch();

  const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setAvatart(files[0]);
    }
  };

  useEffect(() => {
    if (error && error !== undefined) {
      setErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    if (!loading && user) {
      window.location.href = '/'
    }
  }, [user, loading]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(avatartState);
    // @ts-ignore
    let email = e.target.email.value;
    // @ts-ignore
    let birthday = e.target.birthday.value;
    // @ts-ignore
    let gender = e.target.gender.value;
    // @ts-ignore
    let name = e.target.name.value;
    // @ts-ignore
    let password = e.target.password.value;

    const data = {
      email: email,
      birthday: birthday,
      gender: gender,
      avatar: avatartState,
      name: name,
      password: password
    }
    setPendingData(data);
  }

  useEffect(() => {
    if(Object.keys(pendingData).length) {
      // @ts-ignore
      dispatch(SignupRequestAsync(pendingData));
    }
  }, [pendingData]);

  return (
      <div className={styles.main}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <h1>Регистрация!</h1>
            <p>Супер регистрация</p>
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
            <input type="password" name="password" placeholder="Пароль" required/>
          </div>
          <div className={styles.group}>
            <label>Имя</label>
            <input type="text" name="name" placeholder="Имя" required/>
          </div>
          <div className={styles.group}>
            <label>Дата рождения</label>
            <input type="date" name="birthday" placeholder="Дата рождения" required/>
          </div>
          <div className={styles.group}>
            <label>Аватар</label>
            <input type="file" name="avatar" onChange={e => handleSetImage(e)}/>
          </div>
          <div className={styles.group}>
            <label>Пол</label>
            <select name="gender">
              <option value="male">Мужчина</option>
              <option value="female">Женщина</option>
            </select>
          </div>
          <button type="submit">Регистрация</button>
          <div className={styles.linkForm}>
            <Link to="/login">Войти</Link>
          </div>
        </form>
      </div>
  );
}
