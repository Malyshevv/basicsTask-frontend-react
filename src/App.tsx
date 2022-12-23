/**ROOT**/
import React,{useEffect,useState} from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
/**Project CSS**/
import './main.global.css'
/**utils**/
//import io from "socket.io-client";
import {Provider, useSelector} from 'react-redux';
import { store } from './utils/redux/store';
import {RootState} from "./utils/redux/reducer";
import {saveToken} from "./utils/redux/token/tokenReducer";
/**My Component**/
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import {Footer} from "./shared/Footer";
import {Main} from "./shared/Main";
import {NotFound} from "./shared/NotFound";
import {Login} from "./shared/Login";
import {Signup} from "./shared/Signup";
import {Accounts} from "./shared/Accounts";
import {Resetting} from "./shared/Resetting";
//
import {BroadcastVideo} from "./shared/BroadcastVideo";
import {PassengerTrafficTransport} from "./shared/PassengerTrafficTransport";
import {PassengerTrafficRoute} from "./shared/PassengerTrafficRoute";
import {DrivingQualityDriverRating} from "./shared/DrivingQualityDriverRating/DrivingQualityDriverRating";
import {DrivingQualityDrivers} from "./shared/DrivingQualityDrivers/DrivingQualityDrivers";
import {DrivingQualityBranches} from "./shared/DrivingQualityBranches/DrivingQualityBranches";
import {DrivingQualityTransport} from "./shared/DrivingQualityTransport";
import {MediaPanelControl} from "./shared/MediaPanelControl";
import {AdministrativePanel} from "./shared/AdministrativePanel/AdministrativePanel ";


function Container() {
    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
    const token = useSelector<RootState, string>(state => state.token)

    return (
        <Layout>
            {/*<Header/>*/}
            <Content>
                <Routes location={state?.backgroundLocation || location}>
                    {token && (
                        <Route path="/">
                            <Route path="/" element={<Main/>}/>
                            <Route path="/broadcast-video" element={<BroadcastVideo/>}/>
                            <Route path="/passenger_transport" element={<PassengerTrafficTransport/>}/>
                            <Route path="/passenger_route" element={<PassengerTrafficRoute/>}/>
                            <Route path="/driver-quality/driver-rating" element={<DrivingQualityDriverRating/>}/>
                            <Route path="/driver-quality/drivers" element={<DrivingQualityDrivers/>}/>
                            <Route path="/driver-quality/branches" element={<DrivingQualityBranches/>}/>
                            <Route path="/driver-quality/transport" element={<DrivingQualityTransport/>}/>
                            <Route path="/media-panel" element={<MediaPanelControl/>}/>
                            <Route path="/admin" element={<AdministrativePanel/>}/>


                            {/*<Route path="/accounts" element={<Accounts/>}/>*/}
                        </Route>
                    )}
                    {!token && (
                        <Route path="/">
                            <Route path="/" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="resetting" element={<Resetting />} />
                        </Route>
                    )}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Content>
            {/*<Footer/>*/}
        </Layout>
    )
}


export function AppComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    store.dispatch(saveToken());
    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <Container/>
                </BrowserRouter>
            )}
        </Provider>
    );
}

