import React,{useState, useEffect} from 'react';
import './login.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {loginRequestAsync} from "../../../utils/redux/User/Login/reducerLogin";
import {RootState} from "../../../utils/redux/reducer";
import {MainLogo} from "../../../assets/svg/MainLogo";
import {TrolleyBusLogo} from "../../../assets/svg/TrolleyBusLogo";
import {BusLogo} from "../../../assets/svg/BusLogo";
import {TramLogo} from "../../../assets/svg/TramLogo";
import {InputLabel} from "../../../components/InputLabel";
const md5 = require('md5');


export function Login() {

  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const error = useSelector<RootState, any>((state) => state.user.error?.login);
  const loading = useSelector<RootState, any>((state) => state.user.loading);
  const user = useSelector<RootState, any>((state) => state.user.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!loading && user) {
      console.log(user)
      navigate('/')
    } else {
      console.log(loading)
    }
  }, [loading,user]);


  useEffect(() => {
    if (error && error !== undefined) {
      setErrorMessage(error);
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    let username = e.target.username.value;
    // @ts-ignore
    let password = e.target.password.value;

    const data = {
      username: username,
      password: password
    }
    // @ts-ignore
    dispatch(loginRequestAsync(data));
  }

  return (
      <div className="Login__main">
        <form className="Login__form"  onSubmit={handleSubmit}>
            <Link to="/" className="Login__mainLogo">
              <MainLogo />
            </Link>
          {errorMessage && (
              <div className="Login__alertError"> {errorMessage} </div>
          )}

          <InputLabel name={'username'} type={'text'} label={'Имя пользователя'} required />
          <div style={{margin: '10px'}} />
          <InputLabel name={'password'} type={'password'} label={'Пароль'} required />

          <div className="Login__rememberContainer">
            <input className="Login__customCheckbox"  type="checkbox" id="checkbox"
                   name="_remember_me" value="on"/>
            <label htmlFor="checkbox">Запомнить меня</label>
          </div>

          <button className="Login__button" type="submit">Войти</button>

          <div className="Login__linkForm">
            <Link to="/signup">Регистрация</Link>
            <Link to="/resetting">Забыли пароль?</Link>
          </div>

          <div>
            <h2 className="Login__tagline">Умный</h2>
            <h2 className="Login__tagline">транспорт</h2>
          </div>

          <div className="Login__logoContainer">
            <div className="Login__logo">
              <TrolleyBusLogo/>
            </div>
            <div className="Login__logo">
              <BusLogo/>
            </div>
            <div className="Login__logo">
              <TramLogo/>
            </div>
          </div>

        </form>
      </div>
  );
}
