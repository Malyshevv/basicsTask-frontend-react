import React, {useState, useEffect, ReactEventHandler, ChangeEvent, FC} from 'react';
import styles from './signup.css';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {SignupRequestAsync} from "../../utils/redux/User/signup/reducerSignup";
import {MainLogo} from "../../assets/svg/MainLogo";

const md5 = require('md5');

export type Props = {
  label: string;
  type: string;
  name: string;
  required: boolean;
}

export type PropsT ={
  arr: any;
  label: string;
  name: string;
}

const InputLabel:FC<Props> = props => {
  const {label, type, name, required} = props
  return (
      <div className={styles.form_field}>
        <input type={type} placeholder=" " name={name} required={required}/>
        <label>{label}</label>
      </div>
  )
}
const filial = ['Филиал Восточный (авт.)', 'Филиал Северо-Восточный(тролл.)', 'Филиал Северо-Восточный(авт.)', 'Филиал Западный'];
const role = ['Руководитель предприятия', 'Руководитель филиала', 'Руководитель площадки', 'Начальник безопасности движения']

const SelectLabel:FC<PropsT> = props => {
  const {arr, name, label} = props
  const [value, setValue] = useState('');
  const options = arr.map((text:string, index:number) => {
    return <option key={index}>{text}</option>;
  });
  return (
      <div className={styles.f}>
        <select name={name} value={value} onChange={(event) => setValue(event.target.value)}>
          <option value=''>Пожалуйста выберите </option>
          {options}
        </select>
        <label>{label}</label>
      </div>
  )
}

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
      <div className={styles.main}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.mainLogo}>
            <Link to="/">
              <MainLogo />
            </Link>
          </div>
          {errorMessage && (
              <div className={styles.alertError}> {errorMessage} </div>
          )}



          <InputLabel name={'name'} type={'text'} label={'Имя'} required />
          <InputLabel name={'surname'} type={'text'} label={'Фамилия'} required />
          <SelectLabel arr={filial} name={'filial'} label={'Филиал/площадка'}/>
          <InputLabel name={'position'} type={'text'} label={'Должность'} required />
          <SelectLabel arr={role} name={'role'} label={'Роль'}/>
          <InputLabel name={'email'} type={'email'} label={'Email' } required />
          <InputLabel name={'password'} type={'password'} label={'Пароль'} required />

          <button className={styles.button} type="submit">Регистрация</button>

        </form>
      </div>
  );
}
