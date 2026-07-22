import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const categoryColors = {
  景點: '#ef4444',
  美食: '#f59e0b',
  購物: '#8b5cf6',
  文化: '#3b82f6',
  交通: '#10b981',
  戶外: '#14b8a6',
};

export default function MapView({ locations, activities, onMarkerClick }) {
  return (
    <MapContainer
      center={[22.3193, 114.1694]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((loc) => {
        const color = categoryColors[loc.category] || '#6b7280';
        const locActivities = activities.filter((a) => a.location_name === loc.name);
        return (
          <CircleMarker
            key={loc.id}
            center={[loc.lat, loc.lng]}
            radius={7}
            pathOptions={{ color, fillColor: color, fillOpacity: 0.7, weight: 2 }}
            eventHandlers={{ click: () => onMarkerClick?.(loc) }}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <strong style={{ fontSize: '14px' }}>{loc.name}</strong>
                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                  {loc.district} · {loc.category}
                </div>
                {loc.description && (
                  <div style={{ fontSize: '12px', marginBottom: '6px' }}>{loc.description}</div>
                )}
                {locActivities.length > 0 && (
                  <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '6px', marginTop: '6px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>
                      相關活動（{locActivities.length}）
                    </div>
                    {locActivities.map((a) => (
                      <div key={a.id} style={{ fontSize: '12px', marginBottom: '2px' }}>
                        📅 {a.title}（{a.frequency === 'weekly' ? '每週' : '雙週'}）
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}