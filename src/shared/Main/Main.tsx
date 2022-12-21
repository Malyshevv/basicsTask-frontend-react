import React, {useState, useEffect} from 'react';
import './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {MapHome} from '../MapHome'
import {Link} from "react-router-dom";
import {MainLogo} from "../../assets/svg/MainLogo";

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

    const [isVisible, setIsVisible] = useState(true);
    const toggleMenu = () => setIsVisible((isVisible) => !isVisible);


    return (
      <div className="Main__container">
          {/*<h1>Main Page</h1> <br/>*/}
          {/*<p><label>User Type:</label> {userType}</p>*/}

          <div  style={{position: 'relative'}}>
              {isVisible ? (
                      <div className="Main-menu__container">
                          <div className="Main-menu__logo_container">
                              <div className="Main-menu__logo">
                                  <Link to="/signup">
                                      <MainLogo />
                                  </Link>
                              </div>
                          </div>

                          <nav className="Navigation__container">
                              <Link className="Navigation__link" to="">Главная страница</Link>
                              <Link className="Navigation__link" to="/signup">Трансляция видео</Link>
                              <Link className="Navigation__link-paragraph" to="">Пассажиропоток</Link>
                              <Link className="Navigation__link-subparagraph" to="">по транспорту</Link>
                              <Link className="Navigation__link-subparagraph" to="">по маршруту</Link>
                              <Link className="Navigation__link-paragraph" to="">Качество вождения</Link>
                              <Link className="Navigation__link-subparagraph" to="">рейтинг водителей</Link>
                              <Link className="Navigation__link-subparagraph" to="">водители</Link>
                              <Link className="Navigation__link-subparagraph" to="">филиалы</Link>
                              <Link className="Navigation__link-subparagraph" to="">транспорт</Link>
                              <Link className="Navigation__link" to="">Управление медиапанелью</Link>
                              <Link className="Navigation__link" to="">Административная панель</Link>
                          </nav>
                      </div>
              ): null}

              <div className={isVisible ? "Main-menu__button-open" : "Main-menu__button-close" } onClick={toggleMenu}>
                  {isVisible ?
                      (
                         <div style={{transform: 'rotate(180deg)', width: '15px',}}>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.25 19.74"><title>arrow small</title>
                                 <path d="M54.85,32.65l-8.49-8.49a1.38,1.38,0,0,0-2,2l7.51,7.51L44.4,41.14a1.38,1.38,0,0,0,2,2l8.49-8.49a1.38,1.38,0,0,0,0-2Z"
                                    transform="translate(-44 -23.76)"></path>
                             </svg>
                         </div>
                      ) :
                      (
                          <div style={{width: '15px'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.25 19.74"><title>arrow small</title>
                                  <path d="M54.85,32.65l-8.49-8.49a1.38,1.38,0,0,0-2,2l7.51,7.51L44.4,41.14a1.38,1.38,0,0,0,2,2l8.49-8.49a1.38,1.38,0,0,0,0-2Z"
                                        transform="translate(-44 -23.76)"></path>
                              </svg>
                          </div>
                      )
                  }

              </div>
          </div>

              <MapHome />

      </div>
  );
}
