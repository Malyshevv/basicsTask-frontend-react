import React, {useState} from 'react';
import './Menu.css';
import {useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";
import {RootState} from "../../utils/redux/reducer";
import {Navigation} from "../MainMenu/components/Navigation";
import {TaglineMenu} from "../MainMenu/components/TaglineMenu";
import {LogoBig} from "../MainMenu/components/LogoBig";
import {MenuSmall} from "../MainMenu/components/MenuSmall";


export function Menu() {
    const token = useSelector<RootState, string>(state => state.token)
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => setShowMenu(false)

    return (
        <div style={{position: 'relative'}} onMouseLeave={closeMenu}>
            <CSSTransition in={showMenu} classNames='alert' timeout={200} unmountOnExit >
                <div className="Main-menu__container--navigation">
                    <LogoBig style={{padding: '20px'}} />
                    <Navigation />
                    <TaglineMenu style={{marginTop: '240px'}} />
                </div>
            </CSSTransition>

            <CSSTransition in={!showMenu} classNames='alert' timeout={200} unmountOnExit >
                <MenuSmall onMouseEnter={() => setShowMenu((!showMenu))}/>
            </CSSTransition>
        </div>
    )
}
