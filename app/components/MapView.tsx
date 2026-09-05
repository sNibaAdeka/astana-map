'use client';

import { useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

const garden: [number, number] = [51.10617, 71.41657];

const gardenIcon = L.divIcon({
  className: 'garden-marker-shell',
  html: '<span class="garden-marker"><span></span></span>',
  iconSize: [38, 38],
  iconAnchor: [19, 19],
});

function MapActions({ reset }: { reset: number }) {
  const map = useMap();
  if (reset) map.flyTo(garden, 14.6, { duration: 0.8 });
  return null;
}

export default function MapView() {
  const [reset, setReset] = useState(0);

  return (
    <div className="map-frame">
      <MapContainer center={garden} zoom={14.6} scrollWheelZoom className="leaflet-map" zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={garden} radius={1200} pathOptions={{ color: '#18a878', fillColor: '#18a878', fillOpacity: 0.08, weight: 2, dashArray: '7 10' }} />
        <Marker position={garden} icon={gardenIcon}>
          <Popup><b>Ботанический сад Астаны</b><br />Центр рабочей зоны RL-проекта</Popup>
        </Marker>
        <MapActions reset={reset} />
      </MapContainer>
      <div className="map-tools" aria-label="Управление картой">
        <button type="button" onClick={() => setReset((value) => value + 1)}>⌖ <span>К Ботаническому саду</span></button>
        <span className="map-scale">1,2 км — обзорная зона</span>
      </div>
    </div>
  );
}
