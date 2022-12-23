import React, {useState} from "react";
import L, {LatLng} from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl, useMapEvents, Tooltip} from "react-leaflet";
import './mapHome.css';
const r =

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


function MyComponent() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((showMenu) => !showMenu);
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click: () => {
            map.locate()

        },
        locationfound(e) {
            //@ts-ignore
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
    return position === null ? null : (
        <div>
            <Marker position={position}
                    eventHandlers={{
                        click: () => {
                            toggleMenu()
                        },
                    }}>
                <Tooltip>
                    <div style={{backgroundColor: 'red', width: '200px', height: '200px'}}>
                    You are here
                    </div>
                </Tooltip>
                {/*<Popup>You are here</Popup>*/}
            </Marker>
            {showMenu &&
                <div className="Transport__main-container" onClick={toggleMenu}>
                    <div className="Camera__main-container">
                    </div>
                    <div style={{marginRight: "20px"}} />
                    <div className="Transport-information__main-container">
                    </div>
                </div>
            }
        </div>
    )
}
function LocationMarkers() {

    const initialMarkers: LatLng[] = [new LatLng(51.505, -0.09)];
    const [markers, setMarkers] = useState(initialMarkers);

    const map = useMapEvents({
        click(e) {
            markers.push(e.latlng);
            setMarkers((prevValue) => [...prevValue, e.latlng]);

        }
    });

    return (
        <React.Fragment>
            {markers.map(marker => <Marker position={marker} ></Marker>)}
        </React.Fragment>
    );
}



export function MapHome() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((showMenu) => !showMenu);
    return (
        <>
        <MapContainer center={[55.74668, 37.613960]} zoom={11} scrollWheelZoom={true} zoomControl={false} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='topright' />
            <MyComponent />
            <LocationMarkers />
            <Marker position={[55.75088, 37.618960]}
                    eventHandlers={{
                        click: () => {
                            toggleMenu()
                        },
                    }}
            >

                <Popup >
                    Здесь работает
                    <br/>
                    В.В.Путин
                </Popup>
            </Marker>
        </MapContainer>

            {showMenu &&
                <div className="Transport__main-container" onClick={toggleMenu}>
                    <div className="Camera__main-container">
                    </div>
                    <div style={{marginRight: "20px"}} />
                    <div className="Transport-information__main-container">
                    </div>
                </div>
            }

        </>
    );
}
