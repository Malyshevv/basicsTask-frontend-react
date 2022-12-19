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


function Container() {
    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
    const token = useSelector<RootState, string>(state => state.token)

    return (
        <Layout>
            {/*<Header/>*/}
            <Content>
                <Routes location={state?.backgroundLocation || location}>
                    {/*<Route path="/" element={<Main/>}/>*/}
                    <Route path="/" element={<Login/>}/>
                    {token && (
                        <Route path="/">
                            <Route path="/accounts" element={<Accounts/>}/>
                        </Route>
                    )}
                    {!token && (
                        <Route path="/">
                            <Route path="login" element={<Login />} />
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

