import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const item = {
    name: "Location 1",
    location: {
      lat: 33.892166,
      lng: 9.561555,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 33.892166,
    lng: 9.561555,
  };
  return (
    <div className="aboutUsElement">
    <LoadScript googleMapsApiKey="AIzaSyDbPoM1MoffsbSj5BMqKtGM-H9Z378gIXs">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker key={item.name} position={item.location} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};
export default MapContainer;
