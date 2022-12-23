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
    faBars, faBarsProgress, faBarsStaggered, faBus, faBusAlt, faBusSimple,
    faChartLine, faEllipsis, faEllipsisH, faEllipsisV, faEllipsisVertical,
    faGear,
    faHouse,
    faPersonMilitaryToPerson,
    faSliders,
    faTablet,
    faVideo
} from '@fortawesome/free-solid-svg-icons'
import {SelectLabel} from "../../components/SelectLabel";
import {InputLabel} from "../../components/InputLabel";


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
    const [showMenuRoute, setShowMenuRoute] = useState(false);
    const toggleMenuRoute = () => setShowMenuRoute((showMenuRoute) => !showMenuRoute);
    const [showMenuVehicles, setShowMenuVehicles] = useState(false);
    const toggleMenuVehicles = () => setShowMenuVehicles((showMenuVehicles) => !showMenuVehicles);


    const v = ['1', '2', '3', '4']

    return (
      <div className="Main__container">
          {/*<h1>PassengerTrafficTransport Page</h1> <br/>*/}
          {/*<p><label>User Type:</label> {userType}</p>*/}

          <div  style={{position: 'relative'}}>
              {showMenu &&
                  <div className="Main-menu__container--navigation">
                      <div className="Main-menu__logo_container">
                          <Link to="/signup" className="Main-menu__logo">
                              <MainLogo />
                          </Link>
                      </div>

                      <nav className="Navigation__container">
                          <div className='Navigation__link_container--border'>
                              <Link className='Navigation__link_container' to="">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faHouse} />
                                  <h3 className="Navigation__link" >Главная страница</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="/broadcast-video">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faVideo} />
                                  <h3 className="Navigation__link">Трансляция видео</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border' onClick={toggleMenuPassengerTraffic}>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faPersonMilitaryToPerson} />
                                  <h3 className="Navigation__link">Пассажиропоток</h3>
                              </Link>
                          </div>
                          {showPassengerTraffic &&
                              <>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/passenger_transport">по транспорту</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/passenger_route">по маршруту</Link>
                                  </div>
                              </>
                          }
                          <div className='Navigation__link_container--border' onClick={toggleMenuDrivingQuality}>
                              <Link className="Navigation__link_container" to="">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faChartLine} />
                                  <h3 className="Navigation__link">Качество вождения</h3>
                              </Link>

                          </div>
                          {showDrivingQuality &&
                              <>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/driver-quality/driver-rating">рейтинг водителей</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/driver-quality/drivers">водители</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/driver-quality/branches">филиалы</Link>
                                  </div>
                                  <div className='Navigation__link_container--border'>
                                      <Link className="Navigation__link-subparagraph" to="/driver-quality/transport">транспорт</Link>
                                  </div>
                              </>
                          }

                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="/media-panel">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faTablet} />
                                  <h3 className="Navigation__link">Управление медиапанелью</h3>
                              </Link>
                          </div>
                          <div className='Navigation__link_container--border'>
                              <Link className="Navigation__link_container" to="/admin">
                                  <FontAwesomeIcon className="Navigation__Font-Icon" icon={faGear} />
                                  <h3 className="Navigation__link">Административная панель</h3>
                              </Link>
                          </div>
                      </nav>

                      <div className="Burger-Icon__main-container">
                          <div className="Burger-Icon__background-container">
                             <FontAwesomeIcon className={"Burger-Icon__button"}  icon={faBarsStaggered} onClick={toggleMenuRoute} />
                          </div>
                      </div>

                      <div style={{paddingTop: '240px'}}>
                          <h2 className="Main__tagline">Умный</h2>
                          <h2 className="Main__tagline">транспорт</h2>
                      </div>


                      <div style={{display: 'flex', alignItems: 'center', paddingTop: '5px', justifyContent: 'center', opacity: '0.5'}}>
                          <div style={{width: '25px', fill: '#017bb9'}}>
                              <TrolleyBusLogo/>
                          </div>
                          <div style={{width: '25px', fill: '#017bb9', marginLeft: "15px", marginRight: "15px"}} >
                              <BusLogo/>
                          </div>
                          <div style={{width: '25px', fill: '#017bb9'}}>
                              <TramLogo/>
                          </div>
                      </div>
                  </div>
              }
              {!showMenu &&
                  <div className="Main-menu__container-small" >
                          <Link to="/signup" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <div className="Main-menu__logo--small">
                              <MainLogo />
                              </div>
                          </Link>
                      <div className="Container-small__Font-Icon_container" onMouseEnter={() => setShowMenu((!showMenu))}>
                          <FontAwesomeIcon className="Font-Icon__button" icon={faHouse} />
                          <FontAwesomeIcon className="Font-Icon__button" icon={faVideo} />
                          <FontAwesomeIcon className="Font-Icon__button" icon={faPersonMilitaryToPerson} />
                          <FontAwesomeIcon className="Font-Icon__button" icon={faChartLine} />
                          <FontAwesomeIcon className="Font-Icon__button" icon={faTablet} />
                          <FontAwesomeIcon className="Font-Icon__button" icon={faGear} />
                      </div>
                      <div className="Container-small__Burger-Icon_container">
                          <FontAwesomeIcon className={"Burger-Icon__button"}
                                           icon={faBarsStaggered}
                                           onClick={() => {toggleMenu()
                                               toggleMenuRoute()
                                           }} />
                      </div>
                  </div>
              }
              {showMenuRoute &&
                  <div className="Main-menu__container--routes">
                      {/*TODO*/}
                      <p className="Vehicles_big-container__title">Маршруты транспортных средств</p>
                      <div style={{margin: '12px'}} />
                      <SelectLabel arr={v} name={'role'} label={'Поиск по номеру маршрута'}/>
                      <div style={{margin: '12px'}}/>
                      <div className="Vehicles__form-field">
                          <input type='text' placeholder=" " name='transport-find' />
                          <label>Поиск по ГРЗ/гаражному № <br/> минимум 3 символа</label>
                      </div>
                      <div style={{margin: '10px'}}/>
                      <div className="Vehicles-checkbox__container">
                          <input className="Login__customCheckbox" type="checkbox" id="Online-transport"/>
                          <label className='Vehicles-checkbox__label' htmlFor="Online-transport">Онлайн</label>
                      </div>
                      <div style={{margin: '10px'}}/>
                      <div className="Vehicles-checkbox__container">
                          <input className="Login__customCheckbox" type="checkbox" id="Actual-transport"/>
                          <label className='Vehicles-checkbox__label' htmlFor="Actual-transport">Актуальный пассажиропоток</label>
                      </div>
                  </div>
              }
          </div>
          <MapHome />



          <div className="Vehicles_small-container" onClick={toggleMenuVehicles}>
                <p className="Vehicles_small-container__text" style={{color: '#017bb9'}}>Всего: 2200</p>
                  <FontAwesomeIcon  style={{color: '#017bb9', width: '20px', height: '20px'}} icon={faEllipsisVertical} onClick={toggleMenuVehicles} />
          </div>
          <div className="Vehicles_small-contain" onClick={toggleMenuVehicles}>
              <p className="Vehicles_small-container__text">Онлайн: 1200</p>
              <FontAwesomeIcon  style={{color: 'rgb(20 129 97)', width: '20px', height: '20px'}} icon={faEllipsisVertical}  />
          </div>





          {showMenuVehicles &&
              <div className="Vehicles_big-container">
                  <div className="Vehicles_table-contents__container">
                      <span className="Vehicles_table-contents__text">Тип</span>
                      <span className="Vehicles_table-contents__text">Гаражный</span>
                      <span className="Vehicles_table-contents__text">Маршрут</span>
                      <span className="Vehicles_table-contents__text">ГРЗ</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>
                  <div className="Vehicles-list__container">
                      <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} />
                      <span className="Vehicles-list__text">191138</span>
                      <span className="Vehicles-list__text">400T</span>
                      <span className="Vehicles-list__text">K142УТ99</span>
                  </div>

              </div>

          }
      </div>
    );
}
