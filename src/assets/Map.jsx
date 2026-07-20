import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix broken markers in Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Map() {

  const locations = [
    {
      name: "Tokyo",
      position: [35.6764, 139.6500],
      description: "Summer 2026 - Visited for the first time with my GF."
    },
    {
      name: "Mt Fuji",
      position: [35.365268451437565, 138.728209663847],
      description: "Took a day trip during my visit to Tokyo. Was the best part of the trip!"
    },
    {
      name: "Playa Largo",
      position: [25.073569791742035, -80.4651485775365],
      description: "Went on a family trip to the Florida Keys in 2023. Amazing resort and beautiful beaches!"
    },
    {
      name: "New York City",
      position: [40.73500780515713, -73.99322794201144],
      description: "Went in 2019 with my mom, cousin, and aunt. Super cool experience and want to go back someday with my GF!"
    },
    {
      name: "Bayside Inn Key Largo",
      position: [25.094339397669792, -80.44232594483675],
      description: "Second trip to the Florida Keys in 2025. Stayed at a different location this time but had a great time!"
    },
    {
      name: "Pittsburgh, PA",
      position: [40.440387566194495, -80.00075752734688],
      description: "Drove here with my GF for a concert. Was a great trip and we got to see our favorite artists!"
    },
    {
      name: "Bristow, VA",
      position: [38.7533908244399, -77.57007394266019],
      description: "Also came here for a concert with my GF, saw the same artists as in Pittsburg. Had a great time and got to explore a new city!"
    },

  ];

  return (
    <MapContainer
      className="travel-map"
      center={[20, 0]}
      zoom={2}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
        >
          <Popup>
            <h2>{location.name}</h2>
            <p>{location.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}