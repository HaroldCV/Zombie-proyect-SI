import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

const ShowMap = () => {
  const [mapboxAccessToken, setMapboxAccessToken] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/coordinates')
      .then(response => {
        setMapboxAccessToken(response.data.mapbox_access_token);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    if (mapboxAccessToken) {
      mapboxgl.accessToken = mapboxAccessToken;

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-77.076, -12.09], // Coordenadas del centro del mapa
        zoom: 12
      });

      // Agregar las áreas al mapa
      map.on('load', () => {
        const zonas = [
          {
            coordinates: [
              [
                [-77.076789, -12.091124],
                [-77.076138, -12.096654],
                [-77.067830, -12.097026],
                [-77.068430, -12.091824],
                [-77.076789, -12.091124]
              ]
            ],
            properties: {
              nombre: 'Zona de Lima',
              seguridad: 'Alto' // Puedes ajustar esto según tus necesidades
            },
            color: '#FF0000' // Color para la primera zona (rojo)
          },
          {
            coordinates: [
              [
                [-77.079342, -12.087718],
                [-77.071025, -12.088605],
                [-77.070174, -12.092890],
                [-77.077129, -12.093322],
                [-77.079342, -12.087718]
              ]
            ],
            properties: {
              nombre: 'San Miguel',
              seguridad: 'Medio' // Puedes ajustar esto según tus necesidades
            },
            color: '#00FF00' // Color para la segunda zona (verde)
          },
          {
            coordinates: [
              [
                // Agrega las coordenadas del polígono para la nueva zona aquí
                // Ejemplo:
                [-77.080, -12.085],
                [-77.075, -12.085],
                [-77.075, -12.090],
                [-77.080, -12.090],
                [-77.080, -12.085]
              ]
            ],
            properties: {
              nombre: 'Nueva Zona',
              seguridad: 'Bajo' // Puedes ajustar esto según tus necesidades
            },
            color: '#0000FF' // Color para la tercera zona (azul)
          }
        ];

        zonas.forEach((zona, index) => {
          const { coordinates, properties, color } = zona;

          const feature = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates
            },
            properties
          };

          const sourceId = `zona-${index}`;
          const layerId = `zona-${index}`;

          map.addSource(sourceId, {
            type: 'geojson',
            data: feature
          });

          map.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            layout: {},
            paint: {
              'fill-color': color, // Asignar el color correspondiente a la zona
              'fill-opacity': 0.4
            }
          });

          // Agregar popup al hacer clic en el área
          map.on('click', layerId, (e) => {
            const properties = e.features[0].properties;
            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(`<h3>${properties.nombre}</h3><p>Nivel de seguridad: ${properties.seguridad}</p>`)
              .addTo(map);
          });

          // Cambiar el cursor al pasar sobre el área
          map.on('mouseenter', layerId, () => {
            map.getCanvas().style.cursor = 'pointer';
          });

          // Restaurar el cursor al salir del área
          map.on('mouseleave', layerId, () => {
            map.getCanvas().style.cursor = '';
          });
        });
      });

      return () => map.remove();
    }
  }, [mapboxAccessToken]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default ShowMap;
