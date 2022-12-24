import React, {FC, CSSProperties} from 'react';
import './VehiclesComponent.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusSimple} from "@fortawesome/free-solid-svg-icons";

export type Props = {
    styleIcon: CSSProperties;
    srn: string;
    route: string;
    gn: string
}
export const VehiclesComponent: FC<Props> = (props) => {
    const {styleIcon, srn, route, gn} = props
    return (
        <div className="Vehicles-list__container">
            <FontAwesomeIcon className="Vehicles-list__Font-Icon" icon={faBusSimple} style={{...styleIcon}} />
            <span className="Vehicles-list__text">{gn}</span>
            <span className="Vehicles-list__text">{route}</span>
            <span className="Vehicles-list__text">{srn}</span>
        </div>
    )
}