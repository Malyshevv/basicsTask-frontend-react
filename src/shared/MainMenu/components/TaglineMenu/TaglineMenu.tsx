import React, {FC, CSSProperties} from 'react';
import './TaglineMenu.css'
import {TrolleyBusLogo} from "../../../../assets/svg/TrolleyBusLogo";
import {BusLogo} from "../../../../assets/svg/BusLogo";
import {TramLogo} from "../../../../assets/svg/TramLogo";

export type Props = {
    style: CSSProperties;
}
export const TaglineMenu: FC<Props> = ({style}) => {
    return (
        <div style={{...style}}>
            <h2 className="Main-tagline__text">Умный</h2>
            <h2 className="Main-tagline__text">транспорт</h2>
            <div className="Main-tagline__container">
                <div >
                    <TrolleyBusLogo/>
                </div>
                <div  >
                    <BusLogo/>
                </div>
                <div>
                    <TramLogo/>
                </div>
            </div>
        </div>
    )
}