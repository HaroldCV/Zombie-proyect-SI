import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

const ShowMap = () => {
	const [mapboxAccessToken, setMapboxAccessToken] = useState('');

	useEffect(() => {
		axios.get('http://localhost:5000/coordinates').then(response => {
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
		    	style: 'mapbox://styles/mapbox/streets-v12',
			    center: [-77.076, -12.09], // Coordenadas del centro del mapa
		    	zoom: 12
			});

            const popup1 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo SMCC001 \n Centro Comercial muy concurrido y probabilidad de pocos suministros");
            const popup2 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo JMCC001");
            const popup3 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo PLCH001");
            const popup4 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo MMCC001");
            const popup5 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo JMCH001");
            const popup6 = new mapboxgl.Popup({offset: 25}).setText("Zona de Alto Riesgo SICE001");

            /* ---- */

            const market1 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.082301, -12.076970]).setPopup(popup1).addTo(map);
        
            const market2 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.052211, -12.089856]).setPopup(popup2).addTo(map);

            const market3 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.040112, -12.079034]).setPopup(popup5).addTo(map);

            const market4 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.059761, -12.070720]).setPopup(popup3).addTo(map);

            const market5 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.072859, -12.090034]).setPopup(popup4).addTo(map);

            const market6 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.049910, -12.087713]).setPopup(popup6).addTo(map);

            const market7 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.065181, -12.097418]).addTo(map);

            //const market7 = new mapboxgl.Marker({color: "red", scale: 0.6}).setLngLat([-77.004755, -12.089479]).addTo(map);

            const market8 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.025322, -12.094065]).addTo(map)

            const market9 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.022421, -12.059314]).addTo(map)

            const market10 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.013873, -12.064043]).addTo(map)

            const market11 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.048823, -12.083832]).addTo(map)
            const market12 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.093861, -12.076517]).addTo(map)

            const market13 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.079851, -12.068988]).addTo(map)

            const market14 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.083233, -12.057603]).addTo(map)

            const market15 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.061038, -12.072226]).addTo(map)

            const market16 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.053530, -12.087815]).addTo(map)

            const market17 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.036162, -12.096893]).addTo(map)

            const market18 = new mapboxgl.Marker({color: "red", scale: 0.6})
                .setLngLat([-77.042590, -12.086277]).addTo(map)

            // *****************************************************************

            const market20 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.061419, -12.098209]).addTo(map)

            const market21 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.045333, -12.108405]).addTo(map)

            const market22 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.035201, -12.101983]).addTo(map)

            const market23 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.042573, -12.107845]).addTo(map)

            const market24 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.050479, -12.088267]).addTo(map)

            const market25 = new mapboxgl.Marker({color: "yellow", scale: 0.6})
                .setLngLat([-77.032026, -12.087770]).addTo(map)
                
            // *****************************************************************
      
            const market30 = new mapboxgl.Marker({color: "green", scale: 0.6})
                .setLngLat([-77.043382, -12.103876]).addTo(map)

            const market31 = new mapboxgl.Marker({color: "green", scale: 0.6})
                .setLngLat([-77.044978, -12.103211]).addTo(map)

            const market32 = new mapboxgl.Marker({color: "green", scale: 0.6})
                .setLngLat([-77.040703, -12.104823]).addTo(map)

            const market33 = new mapboxgl.Marker({color: "green", scale: 0.6})
                .setLngLat([-77.039422, -12.104495]).addTo(map)

            const market34 = new mapboxgl.Marker({color: "green", scale: 0.6})
                .setLngLat([-77.044805, -12.105292]).addTo(map)

            // Agregar las áreas al mapa
            map.on('load', () => {
                const zonas = [
                    // Zona - San Miguel
                    {
                    coordinates: [
                        [
                        [-77.111589, -12.080120], [-77.110549, -12.077263],
                        [-77.110085, -12.077412], [-77.109418, -12.076300],
                        [-77.109228, -12.076382], [-77.107641, -12.073588],
                        [-77.106049, -12.074247], [-77.104761, -12.071450],
                        [-77.104030, -12.067824], [-77.104053, -12.066674],
                        [-77.104660, -12.063213], [-77.079033, -12.060271],
                        [-77.078144, -12.064171], [-77.077809, -12.066202],
                        [-77.077770, -12.069261], [-77.077873, -12.070165],
                        [-77.078193, -12.071447], [-77.078407, -12.073049],
                        [-77.078672, -12.073718], [-77.080535, -12.075859],
                        [-77.081426, -12.078168], [-77.071521, -12.081590],
                        [-77.072441, -12.084544], [-77.072711, -12.084424],
                        [-77.073616, -12.085823], [-77.073981, -12.085647],
                        [-77.075775, -12.089040], [-77.075381, -12.089227],
                        [-77.078452, -12.097625],
                        [-77.111559, -12.080184]
                        ]
                    ],
                    properties: {
                        nombre: "San Miguel",
                        seguridad: "Bajo",
                        poblacion: "155, 384"
                    },
                    color: "#FF7676"
                    },
                    // Zona - Magdalena
                    {
                    coordinates: [
                        [
                        [-77.078404, -12.097444], [-77.075350, -12.089196],
                        [-77.075785, -12.089033], [-77.073977, -12.085676],
                        [-77.073612, -12.085802], [-77.072738, -12.084443],
                        [-77.072445, -12.084530], [-77.072097, -12.083570],
                        [-77.063358, -12.086667], [-77.055092, -12.091991],
                        [-77.055810, -12.093357], [-77.057361, -12.092559],
                        [-77.058859, -12.096410], [-77.058398, -12.096677],
                        [-77.059906, -12.100045], [-77.060292, -12.099898],
                        [-77.060866, -12.101025], [-77.060807, -12.102179],
                        [-77.060522, -12.103084], [-77.061043, -12.107881],
                        [-77.078404, -12.097444]
                        ]
                    ],
                    properties: {
                        nombre: "Magdalena del Mar",
                        seguridad: "Bajo",
                        poblacion: "60, 290"
                    },
                    color: "#C20000"
                    },
                    // Zona - San Isidro
                    {
                    coordinates: [
                        [
                        [-77.060837, -12.108041], [-77.060429, -12.106761],
                        [-77.060344, -12.104705], [-77.060655, -12.103876],
                        [-77.060547, -12.102953], [-77.060794, -12.102051],
                        [-77.060794, -12.100941], [-77.060228, -12.099874],
                        [-77.059928, -12.100000], [-77.058394, -12.096674],
                        [-77.058892, -12.096402], [-77.057374, -12.092551],
                        [-77.055760, -12.093380], [-77.054987, -12.091870],
                        [-77.053222, -12.093060], [-77.049655, -12.086294],
                        [-77.048582, -12.085045], [-77.047682, -12.091535],
                        [-77.046556, -12.091391], [-77.046497, -12.091679],
                        [-77.043130, -12.091215], [-77.043216, -12.090449],
                        [-77.033796, -12.089143], [-77.033496, -12.090717],
                        [-77.029934, -12.091158], [-77.030170, -12.091913],
                        [-77.007597, -12.088808], [-77.007715, -12.089867],
                        [-77.012073, -12.099002], [-77.010437, -12.107266],
                        [-77.014755, -12.108037], [-77.016563, -12.105566],
                        [-77.016204, -12.103494], [-77.016558, -12.102272],
                        [-77.018773, -12.101931], [-77.031508, -12.103442],
                        [-77.036766, -12.110125], [-77.038234, -12.108987],
                        [-77.039037, -12.109763], [-77.040502, -12.108347],
                        [-77.043168, -12.110859], [-77.044863, -12.110450],
                        [-77.046698, -12.110943], [-77.049316, -12.108331],
                        [-77.051424, -12.110303], [-77.053071, -12.108562],
                        [-77.053741, -12.109695], [-77.056649, -12.111221],
                        [-77.060837, -12.108041]
                        ]
                    ],
                    properties: {
                        nombre: "San Isidro",
                        seguridad: "Alto",
                        poblacion: "60, 735"
                    },
                    color: "#00FF00"
                    },
                    // Zona - Jesús Maria
                    {
                    coordinates: [
                        [
                        [-77.045711, -12.065259], [-77.037557, -12.064220],
                        [-77.038194, -12.067866], [-77.036314, -12.079837],
                        [-77.041762, -12.080629], [-77.041939, -12.082895],
                        [-77.043744, -12.083170], [-77.046203, -12.083047],
                        [-77.048786, -12.085258], [-77.050052, -12.086986],
                        [-77.053287, -12.093037], [-77.063125, -12.086480],
                        [-77.045711, -12.065259]
                        ]
                    ],
                    properties: {
                        nombre: "Jesús María",
                        seguridad: "Medio alto",
                        poblacion: "84, 556"
                    },
                    color: "#F8DA45"
                    },
                    // Zona - Lince
                    {
                    coordinates: [
                        [
                        [-77.028053, -12.078646], [-77.022710, -12.090795],
                        [-77.030177, -12.091865], [-77.029941, -12.091194],
                        [-77.033503, -12.090711], [-77.033825, -12.089137],
                        [-77.043191, -12.090428], [-77.043137, -12.091204],
                        [-77.046495, -12.091645], [-77.046549, -12.091398],
                        [-77.047654, -12.091524], [-77.048628, -12.085050],
                        [-77.046153, -12.083026], [-77.043729, -12.083179],
                        [-77.041910, -12.082922], [-77.041765, -12.080619],
                        [-77.028053, -12.078646]
                        ]
                    ],
                    properties: {
                        nombre: "Lince",
                        seguridad: "Medio alto",
                        poblacion: "53, 842"
                    },
                    color: "#71C55B"
                    },
                    // Zona - Pueblo Libre
                    {
                    coordinates: [
                        [
                        [-77.054209, -12.066506], [-77.049756, -12.070168],
                        [-77.063288, -12.086679], [-77.072107, -12.083558],
                        [-77.071436, -12.081623], [-77.081399, -12.078099],
                        [-77.080546, -12.075846], [-77.078706, -12.073684],
                        [-77.077781, -12.068465], [-77.073766, -12.067736],
                        [-77.054209, -12.066506]
                        ]
                    ],
                    properties: {
                        nombre: "Pueblo Libre",
                        seguridad: "Medio",
                        poblacion: "99, 591"
                    },
                    color: "#8FF0C7"
                    },
                    // Zona - La victoria
                    {
                    coordinates: [
                        [
                        [-77.035412, -12.059832], [-77.017398, -12.057511],
                        [-77.015595, -12.061375], [-77.007002, -12.060257],
                        [-77.000017, -12.063560], [-76.996305, -12.068318],
                        [-77.009721, -12.076323], [-77.009979, -12.079092],
                        [-77.004829, -12.081883], [-77.004614, -12.084044],
                        [-77.010043, -12.084884], [-77.009877, -12.088896],
                        [-77.022778, -12.090787],
                        [-77.035412, -12.059832]
                        ]
                    ],
                    properties: {
                        nombre: "La victoria",
                        seguridad: "Bajo",
                        poblacion: "195, 620"
                    },
                    color: "#FF4040"
                    },
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
                        .setHTML(
                        `<h5>${properties.nombre}</h5>
                        <p>Nivel de seguridad: ${properties.seguridad}</p>
                        <p>Población: ${properties.poblacion}</p>`
                        )
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

    return <div id="map" style={{ height: '600px', width: '100%' }} />;
};

export default ShowMap;
