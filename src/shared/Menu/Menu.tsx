import React, {useState, useEffect} from 'react';
import './Menu.css';

import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
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

export function Menu() {
    const token = useSelector<RootState, string>(state => state.token)


    const [showDrivingQuality, setShowDrivingQuality] = useState(false);
    const toggleMenuDrivingQuality = () => setShowDrivingQuality((showDrivingQuality) => !showDrivingQuality);
    const [showPassengerTraffic, setShowPassengerTraffic] = useState(false);
    const toggleMenuPassengerTraffic = () => setShowPassengerTraffic((showPassengerTraffic) => !showPassengerTraffic);
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => setShowMenu(false)
    return (
        <div>
            <div  style={{position: 'relative'}} onMouseLeave={closeMenu}>
                {showMenu &&
                    <div className="Main-menu__container--navigation">
                        <div className="Main-menu__logo_container">
                            <Link to="/home" className="Main-menu__logo">
                                <MainLogo />
                            </Link>
                        </div>

                        <nav className="Navigation__container">
                            <div className='Navigation__link_container--border'>
                                <Link className='Navigation__link_container' to="home">
                                    <FontAwesomeIcon className="Navigation__Font-Icon" icon={faHouse} />
                                    <h3 className="Navigation__link" >Главная страница</h3>
                                </Link>
                            </div>
                            <div className='Navigation__link_container--border'>
                                <Link className="Navigation__link_container" to="broadcast-video">
                                    <FontAwesomeIcon className="Navigation__Font-Icon" icon={faVideo} />
                                    <h3 className="Navigation__link">Трансляция видео</h3>
                                </Link>
                            </div>
                            <div className='Navigation__link_container--border' onClick={toggleMenuPassengerTraffic}>
                                <Link className="Navigation__link_container" to="#">
                                    <FontAwesomeIcon className="Navigation__Font-Icon" icon={faPersonMilitaryToPerson} />
                                    <h3 className="Navigation__link">Пассажиропоток</h3>
                                </Link>
                            </div>
                            {showPassengerTraffic &&
                                <>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="passenger-transport">по транспорту</Link>
                                    </div>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="passenger-route">по маршруту</Link>
                                    </div>
                                </>
                            }
                            <div className='Navigation__link_container--border' onClick={toggleMenuDrivingQuality}>
                                <Link className="Navigation__link_container" to="#">
                                    <FontAwesomeIcon className="Navigation__Font-Icon" icon={faChartLine} />
                                    <h3 className="Navigation__link">Качество вождения</h3>
                                </Link>

                            </div>
                            {showDrivingQuality &&
                                <>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="driver-quality/driver-rating">рейтинг водителей</Link>
                                    </div>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="driver-quality/drivers">водители</Link>
                                    </div>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="driver-quality/branches">филиалы</Link>
                                    </div>
                                    <div className='Navigation__link_container--border'>
                                        <Link className="Navigation__link-subparagraph" to="driver-quality/transport">транспорт</Link>
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
                        <Link to="/home" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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

                    </div>
                }

            </div>

        </div>
    )
}
