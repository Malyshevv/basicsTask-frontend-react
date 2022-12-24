import React, {useState} from 'react';
import './MainMenu.css';
import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarsStaggered,} from '@fortawesome/free-solid-svg-icons'
import {CSSTransition} from "react-transition-group";
import {Navigation} from "./components/Navigation";
import {TaglineMenu} from "./components/TaglineMenu";
import {LogoBig} from "./components/LogoBig";
import {MenuSmall} from "./components/MenuSmall";
import {VehiclesCounterMenu} from "./components/VehiclesCounterMenu";
import {VehiclesComponent} from "./components/VehiclesComponent";
import {RoutesMenu} from "./components/RoutesMenu";


export function MainMenu() {
    const token = useSelector<RootState, string>(state => state.token)

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((showMenu) => !showMenu);
    const [showMenuRoute, setShowMenuRoute] = useState(false);
    const toggleMenuRoute = () => setShowMenuRoute((showMenuRoute) => !showMenuRoute);
    const [showMenuVehicles, setShowMenuVehicles] = useState(false);
    const toggleMenuVehicles = () => setShowMenuVehicles((showMenuVehicles) => !showMenuVehicles);
    const closeMenu = () => {
        setShowMenu(false)
        setShowMenuRoute(false)
    }

    return (
        <>
            <div  style={{position: 'relative'}} onMouseLeave={closeMenu}>
                <CSSTransition in={showMenu} classNames='alert' timeout={200} unmountOnExit >
                    <div className="Main-menu__container--navigation">
                        <LogoBig style={{padding: '20px'}} />
                        <Navigation />
                        <div className="Burger-Icon__container-main">
                            <div className="Burger-Icon__container-background">
                                <FontAwesomeIcon className={"Burger-Icon"}
                                                 icon={faBarsStaggered}
                                                 onClick={toggleMenuRoute}
                                />
                            </div>
                        </div>
                        <TaglineMenu style={{marginTop: '240px'}} />
                    </div>
                </CSSTransition>

                <CSSTransition in={!showMenu} classNames='alert' timeout={200} unmountOnExit >
                    <MenuSmall onMouseEnter={() => setShowMenu((!showMenu))}>
                        <div className="MenuSmall__children_container">
                            <FontAwesomeIcon className={"Burger-Icon"}
                                             icon={faBarsStaggered}
                                             onClick={() => {
                                                 toggleMenu()
                                                 toggleMenuRoute()
                                             }} />
                        </div>
                    </MenuSmall>
                </CSSTransition>

                <CSSTransition in={showMenuRoute} classNames='alert' timeout={200} unmountOnExit >
                    <RoutesMenu />
                </CSSTransition>
            </div>

            <VehiclesCounterMenu styleContainer={{top: '6px'}}
                                 styleText={{color: '#017bb9'}}
                                 styleIcon={{color:'017bb9'}}
                                 onClick={toggleMenuVehicles}
                                 text={'Всего: 2200'} />
            <VehiclesCounterMenu styleContainer={{top: '43px'}}
                                 styleText={{color: 'green'}}
                                 styleIcon={{color:'rgb(20 129 97)'}}
                                 onClick={toggleMenuVehicles}
                                 text={'Онлайн: 1200'} />


            <CSSTransition in={showMenuVehicles} classNames='alert' timeout={300} unmountOnExit >
                <div className="Vehicles_big-container">
                    <div className="Vehicles_table-contents__container">
                        <span className="Vehicles_table-contents__text">Тип</span>
                        <span className="Vehicles_table-contents__text">Гаражный</span>
                        <span className="Vehicles_table-contents__text">Маршрут</span>
                        <span className="Vehicles_table-contents__text">ГРЗ</span>
                    </div>
                    <VehiclesComponent styleIcon={{color: "#017bb9"}} srn={'K142УТ99'} route={'400T'} gn={'191138'} />
                </div>
            </CSSTransition>
        </>
    );
}