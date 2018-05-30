/* global google */
import React from 'react';

class PlanDate extends React.Component {

  state = {
    users: [{
      name: 'bill',
      location: {
        lat: 51.5344,
        lng: -0.0694
      }
    },{
      name: 'bob',
      location: {
        lat: 51.5465,
        lng: -0.1058
      }
    }]
  };


  componentDidMount() {
    this.map = new google.maps.Map(this.mapDiv, {
      center: { lat: 51.515, lng: -0.072 },
      zoom: 14
    });

    const centerMarker = new google.maps.InfoWindow({
      content: '⭐️',
      map: this.map
    });

    this.marker1 = new google.maps.Marker({
      position: this.state.users[0].location,
      map: this.map,
      label: '😍'
    });
    this.marker2 = new google.maps.Marker({
      position: this.state.users[1].location,
      map: this.map,
      label: '😍'
    });

    const center = google.maps.geometry.spherical.interpolate(this.marker1.position, this.marker2.position, 0.5);
    console.log(`CENTER --> lat: ${center.lat()} long: ${center.lng()}`);
    centerMarker.setPosition(center);
    this.map.setCenter(center);

    var service = new google.maps.places.PlacesService(this.map);

    service.nearbySearch({
      location: centerMarker.position,
      radius: 1000,
      keyword: ['bar' ]
    }, (results) => {
      const cleanedResults = results.map(bar => {
        return ({
          name: bar.name,
          address: bar.vicinity,
          location: bar.geometry.location.toJSON(),
          image: bar.photos ? bar.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : null
        });
      });
      this.setState({ bars: cleanedResults });
      console.log(cleanedResults);
      cleanedResults.map(bar => {
        return new google.maps.Marker({
          position: bar.location,
          map: this.map,
          label: '🥂'
        });
      });
    });
  }



  generateMarkers = () => {
    if(!this.props.markers) return false;
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = this.props.markers.map(marker => {
      return new google.maps.Marker({
        position: marker.location,
        map: this.map,
        label: '😍'
      });
    });
  }

  componentWillUnmount() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = null;
    this.marker.setMap(null);
    this.market = null;
    this.map = null;
  }

  render() {
    return (
      <div className="container">
        <div className="map" ref={ el => this.mapDiv = el }></div>
        <div>
          <h1 className="title is-1">Bars</h1>
          {!this.state.bars && <p>Loading...</p>}
          <div className="columns is-multiline">
            {this.state.bars && this.state.bars.map(bar =>
              <div key={bar.name} className="is-one-third-desktop is-half-tablet">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${bar.image})` }}
                ></div>
                <div className="card-content">
                  <div className="media">
                    <p className="subtitle is-5">{bar.name}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlanDate;
