import React, {useState, useEffect, ReactEventHandler, ChangeEvent} from 'react';
import './signup.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../utils/redux/reducer";
import {SignupRequestAsync} from "../../../utils/redux/User/signup/reducerSignup";
import {MainLogo} from "../../../assets/svg/MainLogo";
import {InputLabel} from "../../../components/InputLabel";
import {SelectLabel} from "../../../components/SelectLabel";

const md5 = require('md5');

const filial = ['Филиал Восточный (авт.)', 'Филиал Северо-Восточный(тролл.)', 'Филиал Северо-Восточный(авт.)', 'Филиал Западный'];
const role = ['Руководитель предприятия', 'Руководитель филиала', 'Руководитель площадки', 'Начальник безопасности движения']



export function Signup() {
  let location = useLocation()
  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [pendingData, setPendingData] = useState({})

  const error = useSelector<RootState, any>((state) => state.user.error?.signup);
  const loading = useSelector<RootState, any>((state) => state.user.loading);
  const user = useSelector<RootState, any>((state) => state.user.data);

  const dispatch = useDispatch();


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
    // @ts-ignore
    let email = e.target.email.value;
    // @ts-ignore
    let name = e.target.name.value;
    // @ts-ignore
    let password = e.target.password.value;
    // @ts-ignore
    let surname = e.target.surname.value;
    // @ts-ignore
    let filial = e.target.filial.value;
    // @ts-ignore
    let position = e.target.position.value;
    // @ts-ignore
    let role = e.target.role.value;
    // @ts-ignore

    const data = {
      name: name,
      surname: surname,
      filial: filial,
      position: position,
      role: role,
      email: email,
      password: password
    }
    setPendingData(data);
    console.log('data', data)
  }

  useEffect(() => {
    if(Object.keys(pendingData).length) {
      // @ts-ignore
      dispatch(SignupRequestAsync(pendingData));
    }
  }, [pendingData]);


  return (
      <div className="Signup__main">

        <form className="Signup__form" onSubmit={handleSubmit}>
          <Link to="/" className="Signup__mainLogo">
              <MainLogo />
          </Link>
          {errorMessage && (
              <div className="Signup__alertError"> {errorMessage} </div>
          )}

          <InputLabel name={'name'} type={'text'} label={'Имя'} required />
          <InputLabel name={'surname'} type={'text'} label={'Фамилия'} required />
          <SelectLabel arr={filial} name={'filial'} label={'Филиал/площадка'}/>
          <InputLabel name={'position'} type={'text'} label={'Должность'} required />
          <SelectLabel arr={role} name={'role'} label={'Роль'}/>
          <InputLabel name={'email'} type={'email'} label={'Email' } required />
          <InputLabel name={'password'} type={'password'} label={'Пароль'} required />

          <p style={{color: 'white', marginBottom: '10px'}}><span style={{color: 'red'}}>*</span> обязательные поля</p>

          <button className="Signup__button" type="submit">Зарегистрироваться</button>

        </form>
      </div>
  );
}
