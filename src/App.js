import React from 'react';
import SearchBar from './components/SearchBar';
import Address from './components/Address';
import Map from './components/Map';

import './App.css';
import './main';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      address: {
        ip: '',
        city: '',
        country: '',
        timezone: '',
        isp: '',
      },
    };
  }

  getLocation() {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_zS2ShPiwVbWChtZV4MmblzLhVzvOn&ipAddress=${this.state.address.ip}`
      )
      .then((response) => {
        this.setState({
          address: {
            ip: this.state.ip,
            city: response.data.location.city,
            country: response.data.location.country,
            timezone: response.data.location.timezone,
            isp: response.data.isp,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get('https://api.ipify.org')
      .then((response) => {
        this.setState({ ip: response.data });
        this.getLocation();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <header>
          <h1 className='title'>IP Address Tracker</h1>
          <SearchBar />
          <Address address={this.state.address} />
        </header>
        <main>
          <Map />
        </main>
      </>
    );
  }
}

export default App;
