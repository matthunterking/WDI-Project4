/* global google */
import React from 'react';
import Auth from '../../lib/Auth';
import axios from 'axios';

class PlanDate extends React.Component {
  constructor() {
    super();
    this.markers = [];
  }

  state = {
    match: {},
    currentUser: {}
  };


  componentDidMount() {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ match: res.data, currentUser: Auth.getUser() }));

    this.map = new google.maps.Map(this.mapDiv, {
      center: { lat: 51.515, lng: -0.072 },
      zoom: 12,
      styles: [
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#FFFAF0'
            }
          ]
        },
        {
          'featureType': 'water',
          'stylers': [
            {
              'color': '#d9edf7'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry',
          'stylers': [
            {
              'lightness': 40
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on',
              'color': '#c5dac6'
            }
          ]
        },
        {
          'featureType': 'landscape.natural.terrain',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#CCAA88'
            },
            {
              'lightness': 40
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#EEEEEE'
            }
          ]
        },
        {
          'featureType': 'road',
          'stylers': [
            {
              'visibility': 'simplified'
            },
            {
              'color': '#FF0000'
            },
            {
              'gamma': 9
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#FF0000'
            },
            {
              'gamma': 8
            }
          ]
        },
        {
          'featureType': 'road.highway.controlled_access',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#FF0000'
            },
            {
              'gamma': 4
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.government',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#DDDDDD'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#CCCCCC'
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'color': '#AAAAAA'
            },
            {
              'gamma': 4
            }
          ]
        }
      ]
    });
  }

  componentDidUpdate() {

    const centerMarker = new google.maps.InfoWindow({
      content: '⭐️',
      map: this.map
    });

    this.marker1 = new google.maps.Marker({
      position: this.state.currentUser.location,
      map: this.map,
      label: '😍'
    });

    this.marker2 = new google.maps.Marker({
      position: this.state.match.location,
      map: this.map,
      label: '😍'
    });

    const center = google.maps.geometry.spherical.interpolate(this.marker1.position, this.marker2.position, 0.5);

    centerMarker.setPosition(center);
    this.map.setCenter(center);

    const service = new google.maps.places.PlacesService(this.map);

    service.nearbySearch({
      location: centerMarker.position,
      radius: 1000,
      keyword: ['bar']
    }, (results) => {
      if(!results) return null;
      const cleanedResults = results.map(bar => {
        return ({
          name: bar.name,
          address: bar.vicinity,
          location: bar.geometry.location.toJSON(),
          image: bar.photos ? bar.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : null
        });
      });
      this.setState({ bars: cleanedResults });
      cleanedResults.map(bar => {
        return new google.maps.Marker({
          position: bar.location,
          map: this.map,
          label: '💛'
        });
      });
    });
  }

  // generateMarkers = () => {
  //   if(!this.props.markers) return false;
  //   this.markers.forEach(marker => marker.setMap(null));
  //   this.markers = this.props.markers.map(marker => {
  //     return new google.maps.Marker({
  //       position: marker.location,
  //       map: this.map,
  //       label: '😍'
  //     });
  //   });
  // }


  componentWillUnmount() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = null;
    this.marker.setMap(null);
    this.market = null;
    this.map = null;
  }

  render() {
    return (
      <div>
        <h1 className="title is-1">Bars</h1>
        <div className="map" ref={ el => this.mapDiv = el }></div>
        <div className="container bars">
          {!this.state.bars && <p>Loading...</p>}
          <div className="columns is-multiline">
            {this.state.bars && this.state.bars.map(bar =>
              <div key={bar.name} className="card is-one-third-desktop is-half-tablet">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${bar.image})` }}
                ></div>
                <div className="card-content">
                  <p className="subtitle is-7">{bar.name}</p>
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
