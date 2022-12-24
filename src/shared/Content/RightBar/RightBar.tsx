import React, {useEffect, useState} from 'react';
import styles from './rightbar.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../utils/redux/reducer";
/*Page*/
import {MapHome} from "../../Page/MapHome";
import {BroadcastVideo} from "../../Page/BroadcastVideo";
import {PassengerTrafficTransport} from "../../Page/PassengerTrafficTransport";
import {PassengerTrafficRoute} from "../../Page/PassengerTrafficRoute";
import {DrivingQualityDriverRating} from "../../Page/DrivingQualityDriverRating";
import {DrivingQualityDrivers} from "../../Page/DrivingQualityDrivers";
import {DrivingQualityBranches} from "../../Page/DrivingQualityBranches";
import {DrivingQualityTransport} from "../../Page/DrivingQualityTransport";
import {MediaPanelControl} from "../../Page/MediaPanelControl";
import {AdministrativePanel} from "../../AdministrativePanel";

export function RightBar(socket:any) {
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
                return <MapHome/>
            case '/broadcast-video':
                return <BroadcastVideo/>
            case '/passenger-transport':
                return <PassengerTrafficTransport/>
            case '/passenger-route':
                return <PassengerTrafficRoute/>
            case '/driver-quality/driver-rating':
                return <DrivingQualityDriverRating/>
            case '/driver-quality/drivers':
                return <DrivingQualityDrivers/>
            case '/driver-quality/branches':
                return <DrivingQualityBranches/>
            case '/driver-quality/transport':
                return <DrivingQualityTransport/>
            case '/media-panel':
                return <MediaPanelControl/>
            case '/admin':
                return <AdministrativePanel/>
        }
    }
  return (
      <div>
          {getPage(locationName)}
      </div>
  );
}
