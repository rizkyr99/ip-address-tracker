import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [],
    };
  }

  getLocation() {}

  componentDidMount() {
    this.setState({ position: [51.505, -0.09] });
  }

  render() {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.state.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
