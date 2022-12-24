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
import {Login} from "./shared/Auth/Login";
import {Signup} from "./shared/Auth/Signup";
import {Accounts} from "./shared/Page/Accounts";
import {Resetting} from "./shared/Auth/Resetting";

function Container() {
    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
    const token = useSelector<RootState, string>(state => state.token)
    const user = useSelector<RootState, any>((state) => state.user.data);

    return (
        <Layout>
            {/*<Header/>*/}
            <Content>
                <Routes location={state?.backgroundLocation || location}>
                    {token && (
                        <Route path="/" element={<Main />}>
                            <Route path="home"/>
                            <Route path="broadcast-video"/>
                            <Route path="passenger-transport"/>
                            <Route path="passenger-route"/>
                            <Route path="driver-quality/driver-rating"/>
                            <Route path="driver-quality/drivers"/>
                            <Route path="driver-quality/branches"/>
                            <Route path="driver-quality/transport"/>
                            <Route path="media-panel"/>
                            <Route path="admin"/>
                        </Route>
                    )}


                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="resetting" element={<Resetting />} />

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

