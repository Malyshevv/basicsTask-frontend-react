import React, {FC, useState} from 'react';
import './Navigation.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faGear,
    faHouse,
    faPersonMilitaryToPerson,
    faTablet,
    faVideo
} from "@fortawesome/free-solid-svg-icons";

export const Navigation:FC = () => {
    const [showDrivingQuality, setShowDrivingQuality] = useState(false);
    const toggleMenuDrivingQuality = () => setShowDrivingQuality((showDrivingQuality) => !showDrivingQuality);
    const [showPassengerTraffic, setShowPassengerTraffic] = useState(false);
    const toggleMenuPassengerTraffic = () => setShowPassengerTraffic((showPassengerTraffic) => !showPassengerTraffic);
    return (
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
    )
}
