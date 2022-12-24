import React, {FC, CSSProperties} from 'react';
import './VehiclesCounterMenu.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

export type Props = {
    styleContainer: CSSProperties;
    styleText: CSSProperties;
    styleIcon: CSSProperties;
    onClick: () => void;
    text: string;
}

export const VehiclesCounterMenu: FC<Props> = (props) => {
    const {styleText, styleIcon, styleContainer, onClick, text} = props
    return (
        <div className="VehiclesCounter__container" style={{...styleContainer}} onClick={onClick}>
            <p className="VehiclesCounter__text" style={{...styleText}}>{text}</p>
            <FontAwesomeIcon className='VehiclesCounter__icon'  style={{...styleIcon}} icon={faEllipsisVertical} />
        </div>
    )
}