import React, {FC, CSSProperties} from 'react';
import './LogoBig.css'
import {Link} from "react-router-dom";
import {MainLogo} from "../../../../assets/svg/MainLogo";

export type Props = {
    style: CSSProperties;
}
export const LogoBig: FC<Props> = ({style}) => {
    return (
        <div style={{...style}}>
            <div className="Logo-big__container">
                <Link to="/home" className="Logo-big__logo">
                    <MainLogo />
                </Link>
            </div>
        </div>
    )
}