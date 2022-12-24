import React, {useState} from 'react';
import './MainMenu.css';
import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/reducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBarsStaggered,
    faBusSimple,
    faEllipsisVertical,

} from '@fortawesome/free-solid-svg-icons'
import {CSSTransition} from "react-transition-group";
import {Navigation} from "./components/Navigation";
import {SelectLabel} from "../../components/SelectLabel";
import {TaglineMenu} from "./components/TaglineMenu";
import {LogoBig} from "./components/LogoBig";
import {MenuSmall} from "./components/MenuSmall";


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


    const v = ['1', '2', '3', '4']

    return (
        <div>
            <div  style={{position: 'relative'}} onMouseLeave={closeMenu}>
                <CSSTransition in={showMenu} classNames='alert' timeout={200} unmountOnExit >
                    <div className="Main-menu__container--navigation">
                        <LogoBig style={{padding: '20px'}} />
                        <Navigation />
                        <div className="Burger-Icon__main-container">
                            <div className="Burger-Icon__background-container">
                                <FontAwesomeIcon className={"Burger-Icon__button"}
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
                        <div className="Container-small__Burger-Icon_container">
                            <FontAwesomeIcon className={"Burger-Icon__button"}
                                             icon={faBarsStaggered}
                                             onClick={() => {
                                                 toggleMenu()
                                                 toggleMenuRoute()
                                             }} />
                        </div>
                    </MenuSmall>
                </CSSTransition>

                <CSSTransition in={showMenuRoute} classNames='alert' timeout={200} unmountOnExit >
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
                </CSSTransition>
            </div>


            {/*TODO*/}
            <div className="Vehicles_small-container" onClick={toggleMenuVehicles}>
                <p className="Vehicles_small-container__text" style={{color: '#017bb9'}}>Всего: 2200</p>
                <FontAwesomeIcon  style={{color: '#017bb9', width: '20px', height: '20px'}} icon={faEllipsisVertical} />
            </div>
            <div className="Vehicles_small-contain" onClick={toggleMenuVehicles}>
                <p className="Vehicles_small-container__text">Онлайн: 1200</p>
                <FontAwesomeIcon  style={{color: 'rgb(20 129 97)', width: '20px', height: '20px'}} icon={faEllipsisVertical}  />
            </div>


            <CSSTransition in={showMenuVehicles} classNames='alert' timeout={300} unmountOnExit >
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
            </CSSTransition>

        </div>
    );
}