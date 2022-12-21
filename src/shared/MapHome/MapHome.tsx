import React from "react";
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet";
import './mapHome.css';


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export function MapHome() {
    return (
        <MapContainer center={[55.74668, 37.613960]} zoom={11} scrollWheelZoom={true} zoomControl={false} attributionControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position='topright' />
            <Marker position={[55.75088, 37.618960]}>
                <Popup>
                    Здесь работает
                    <br/>
                    В.В.Путин
                </Popup>
            </Marker>
        </MapContainer>
    );
}
