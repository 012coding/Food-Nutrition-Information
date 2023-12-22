import React, { useEffect, useState } from 'react';
import styles from '../css/MapContainer.module.css';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [places, setPlaces] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new kakao.maps.Map(container, options);
          setMapInstance(map);

          const ps = new kakao.maps.services.Places();

          const keywordSearchOptions = {
            location: new kakao.maps.LatLng(latitude, longitude),
          };

          if (searchPlace) {
            ps.keywordSearch(searchPlace, placesSearchCB, keywordSearchOptions);
          }

          function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
              let bounds = new kakao.maps.LatLngBounds();
              setPlaces(data);

              for (let i = 0; i < data.length; i++) {
                displayMarker(data[i], i + 1);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              }

              map.setBounds(bounds);
            }
          }

          function displayMarker(place, number) {
            let marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x),
            });

            kakao.maps.event.addListener(marker, 'click', function () {
              infowindow.setContent(`
                <div style="padding:5px;font-size:12px; text-align: center;">
                  <h3>${place.place_name}</h3>
                  <p>${place.road_address_name}</p>
                  <p>${place.phone}</p>
                </div>
              `);
              infowindow.open(map, marker);
            });

            // 클릭 이벤트 추가
            const placeInfoElement = document.getElementById(`placeInfo${number}`);
            if (placeInfoElement) {
              placeInfoElement.addEventListener('click', function () {
                infowindow.setContent(`
                  <div style="padding:5px;font-size:12px; text-align: center;">
                    <h3>${place.place_name}</h3>
                    <p>${place.road_address_name}</p>
                    <p>${place.phone}</p>
                  </div>
                `);
                infowindow.open(map, marker);
              });
            }

            var content = '<div class="marker-number">' + number + '</div>';
            var markerNumber = new kakao.maps.CustomOverlay({
              content: content,
              position: marker.getPosition(),
              map: map,
            });
          }
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [searchPlace, initialized]);

  return (
    <div id="myMapContainer" className={styles.container}>
      <div className={styles.listContainer}>
        <ul className={styles.placesList}>
          {places.map((place, index) => (
            <div key={index} id={`placeInfo${index + 1}`} className={styles.placeInfo}>
              <p>{index + 1}. {place.place_name}</p>
            </div>
          ))}
        </ul>
      </div>
      <div
        id="myMap"
        style={{
          width: '1000px',
          height: '600px',
          border: '4px solid #ccc',
          borderRadius: '10px',
          margin: 'auto',
        }}
      ></div>
    </div>
  );  
};

export default MapContainer;
