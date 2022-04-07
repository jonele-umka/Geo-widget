import React from 'react'
import { Map, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const locationIcon = new L.Icon({
	iconUrl: require('../location-pin.png'),
	iconRetinaUrl: require('../location-pin.png'),
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(60, 60),
	className: 'map_icon'
})

export const Maps = ({coor}) => {
	return (
		<div className="map">
			<Map style = {{ width:'100%', height: '100vh'}} center={coor} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={coor} icon={ locationIcon }>
					
				</Marker>
			</Map>
		</div>
	)
}

