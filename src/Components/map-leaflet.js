import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet'

const myIcon = L.icon({
	iconUrl:
		'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
	iconSize: [38, 95],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76]
})
// http://bl.ocks.org/ramiroaznar/2c2793c5b3953ea68e8dd26273f5b93c
function MapContactUs() {
	return (
		<>
			<MapContainer
				center={[-12.45988, 130.84082]}
				zoom={16}
				scrollWheelZoom={false}
				style={{ width: '100%', height: '600px' }}
			>
				<TileLayer
					url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=a7dc446b759547f59032dd97e9493748
"
				/>
				<Marker position={[-12.45988, 130.84082]} icon={myIcon}>
					<Popup>
						Darwin <br /> Northern Territory
					</Popup>
				</Marker>
			</MapContainer>
		</>
	)
}

export default MapContactUs
