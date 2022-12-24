import React, {FC, ReactNode, MouseEvent} from 'react';
import './MenuSmall.css'
import {Link} from "react-router-dom";
import {MainLogo} from "../../../../assets/svg/MainLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faGear,
    faHouse,
    faPersonMilitaryToPerson,
    faTablet,
    faVideo
} from "@fortawesome/free-solid-svg-icons";

export type Props = {
    onMouseEnter: (e: MouseEvent<HTMLElement>) => void,
    children?: ReactNode;
}

export const MenuSmall:FC<Props> =({onMouseEnter, children}) => {
    return (
        <div className="MenuSmall__container">
            <Link className="MenuSmall__logo_container" to="/home" >
                <div className="MenuSmall__logo">
                    <MainLogo />
                </div>
            </Link>
            <div className="MenuSmall__Font-Icon_container" onMouseEnter={onMouseEnter}>
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faHouse} />
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faVideo} />
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faPersonMilitaryToPerson} />
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faChartLine} />
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faTablet} />
                <FontAwesomeIcon className="MenuSmall__Font-Icon" icon={faGear} />
            </div>
            {children}
        </div>
    )
}