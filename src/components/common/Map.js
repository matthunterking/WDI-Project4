/* global google */
import React from 'react';

class Map extends React.Component {

  // constructor() {
  //   super();
  //   this.markers = [];
  // }

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
        lng: 0.1058
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
      location: centerMarker,
      radius: 500,
      type: ['bars']
    });
  }

  // function callback(results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //   }





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
    // removing the marker from the map as there is no "garbage collector for maps"
    this.marker.setMap(null);
    this.market = null;
    this.map = null;
  }

  render() {
    return (
      <div className="map" ref={ el => this.mapDiv = el } />
    );
  }
}

export default Map;
