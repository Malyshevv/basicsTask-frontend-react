import React,{useEffect, useState} from 'react';
import styles from './accounts.css';
import {useAccountsLoad} from "../../utils/hooks/useAccountsLoad";
import {Link} from "react-router-dom";
import {getAge} from "../../utils/js/getAge";

export function Accounts() {
   interface IList {
    _id: string,
    name: string,
    avatar: string,
    birthday: string,
  }

  const [stateList, setList] = useState<any[]>([]);
  const {loading, accounts} = useAccountsLoad();

  useEffect(() => {
    if (!stateList || accounts !== stateList) {
      setList(accounts)
    }
  }, [loading]);

  return (
      <div className={styles.main}>
        <h1>Accounts Page</h1> <br/>
          <ul className={styles.cards}>
            {stateList && (
                stateList.map((list:IList) => (
                    <li key={list._id} className={styles.card}>
                        <img src={(list.avatar) ? `http://localhost:5001/upload/avatar/${list.avatar}` : 'https://124ural.ru/wp-content/uploads/2017/04/no-avatar.png'} className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <p><b>Имя</b>: {list.name}</p>
                            <p><b>Возраст</b>: {getAge(list.birthday)}</p>
                        </div>
                    </li>
                ))
            )}
          </ul>
      </div>
  );
}
