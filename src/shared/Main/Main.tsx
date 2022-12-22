import React, {useState, useEffect} from 'react';
import './main.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {MapHome} from '../MapHome'
import {Link} from "react-router-dom";
import {MainLogo} from "../../assets/svg/MainLogo";
import {TrolleyBusLogo} from "../../assets/svg/TrolleyBusLogo";
import {BusLogo} from "../../assets/svg/BusLogo";
import {TramLogo} from "../../assets/svg/TramLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartArea, faChartBar, faChartColumn, faChartGantt,
    faChartLine, faChartSimple,
    faCoffee,
    faGear,
    faHouse, faLineChart,
    faPersonMilitaryToPerson, faScrewdriver, faTablet, faTablets,
    faVideo
} from '@fortawesome/free-solid-svg-icons'

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


    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((showMenu) => !showMenu);
    const [showDrivingQuality, setShowDrivingQuality] = useState(false);
    const toggleMenuDrivingQuality = () => setShowDrivingQuality((showDrivingQuality) => !showDrivingQuality);
    const [showPassengerTraffic, setShowPassengerTraffic] = useState(false);
    const toggleMenuPassengerTraffic = () => setShowPassengerTraffic((showPassengerTraffic) => !showPassengerTraffic);
    // const toggleMenuPassengerTraffic = () => setIsVisiblePassengerTraffic((!isVisiblePassengerTraffic));



    return (
      <div className="Main__container">
          {/*<h1>Main Page</h1> <br/>*/}
          {/*<p><label>User Type:</label> {userType}</p>*/}

          <div  style={{position: 'relative'}}>
              {showMenu &&
                  <div className="Main-menu__container">
                      <div className="Main-menu__logo_container">
                          <Link to="/signup" className="Main-menu__logo">
                              <MainLogo />
                          </Link>
                      </div>

                      <nav className="Navigation__container">
                          <div className='Navigation__link_container--border'>
                              <Link className='Navigation__link_container' to="">
                                  <FontAwesomeIcon className="Font-Icon" icon={faHouse} />
                                  <h3 className="Navigation__link" >Главная страница</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="/signup">
                                  <FontAwesomeIcon className="Font-Icon" icon={faVideo} />
                                  <h3 className="Navigation__link">Трансляция видео</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border' onClick={toggleMenuPassengerTraffic}>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Font-Icon" icon={faPersonMilitaryToPerson} />
                                  <h3 className="Navigation__link">Пассажиропоток</h3>
                              </Link>
                          </div>
                          {showPassengerTraffic &&
                              <>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">по транспорту</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">по маршруту</Link>
                                  </div>
                              </>
                          }
                          <div className='Navigation__link_container--border' onClick={toggleMenuDrivingQuality}>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Font-Icon" icon={faChartLine} />
                                  <h3 className="Navigation__link">Качество вождения</h3>
                              </Link>

                          </div>
                          {showDrivingQuality &&
                              <>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">рейтинг водителей</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">водители</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">филиалы</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="">транспорт</Link>
                                  </div>
                              </>
                          }

                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Font-Icon" icon={faTablet} />
                                  <h3 className="Navigation__link">Управление медиапанелью</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Font-Icon" icon={faGear} />
                                  <h3 className="Navigation__link">Административная панель</h3>
                              </Link>
                          </div>
                      </nav>

                      <div style={{paddingTop: '70px'}}>
                          <h2 className="Main__tagline">Умный</h2>
                          <h2 className="Main__tagline">транспорт</h2>
                      </div>


                      <div style={{display: 'flex', alignItems: 'center', paddingTop: '15px', justifyContent: 'space-around'}}>
                          <div style={{width: '45px', fill: '#017bb9'}}>
                              <TrolleyBusLogo/>
                          </div>
                          <div style={{width: '45px', fill: '#017bb9'}} >
                              <BusLogo/>
                          </div>
                          <div style={{width: '45px', fill: '#017bb9'}}>
                              <TramLogo/>
                          </div>
                      </div>
                  </div>
              }
              {!showMenu &&
                  <div className={"Main-menu__button-open"} onMouseEnter={() => setShowMenu((!showMenu))}>
                      <FontAwesomeIcon className="Font-Icon__button" icon={faHouse} />
                      <FontAwesomeIcon className="Font-Icon__button" icon={faVideo} />
                      <FontAwesomeIcon className="Font-Icon__button" icon={faPersonMilitaryToPerson} />
                      <FontAwesomeIcon className="Font-Icon__button" icon={faChartLine} />
                      <FontAwesomeIcon className="Font-Icon__button" icon={faTablet} />
                      <FontAwesomeIcon className="Font-Icon__button" icon={faGear} />
                  </div>
              }
          </div>
          <MapHome />
      </div>
    );
}
