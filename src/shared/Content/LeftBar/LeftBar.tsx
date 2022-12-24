import React, {useEffect, useState} from 'react';
import styles from './leftbar.css';
import { MainMenu } from "../../MainMenu";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../utils/redux/reducer";
import {Menu} from "../../Menu";

export function LeftBar() {
    const location = useLocation()
    const navigate = useNavigate();

    //const loading = useSelector<RootState, any>((state) => state.user.loading);
    const user = useSelector<RootState, any>((state) => state.user.data);
    const [locationName,setLocationName] = useState('');

    useEffect(() => {
        if (location.pathname) {
            setLocationName(location.pathname);
        }
    }, [location]);

const getPage = (locationName:string) => {
    switch (locationName) {
        case '/home':
            return <MainMenu/>
        case '/broadcast-video':
        case '/passenger-transport':
        case '/passenger-route':
        case '/driver-quality/driver-rating':
        case '/driver-quality/drivers':
        case '/driver-quality/branches':
        case '/driver-quality/transport':
        case '/media-panel':
        case '/admin':
            return <Menu/>
    }
}
return (
    <div>
        {getPage(locationName)}
    </div>
);
}