import React, { useEffect, useRef } from 'react';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';
import Card from './Card';

function Map() {
    const [cities, setcities, inprange, setinprange, sectors, setsectors, preferences, setpreferences, air, setair, water, setwater, land, setland, rainfall, setrainfall, data, setdata] = useContext(UserContext);
    const mapRef = useRef(null);
    const markersRef = useRef([]);


    useEffect(() => {
        if (!mapRef.current) {
            const script1 = document.createElement('script');
            script1.src = 'https://js.api.here.com/v3/3.1/mapsjs-core.js';
            script1.async = true;
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = 'https://js.api.here.com/v3/3.1/mapsjs-service.js';
            script2.async = true;
            document.body.appendChild(script2);

            const script3 = document.createElement('script');
            script3.src = 'https://js.api.here.com/v3/3.1/mapsjs-ui.js';
            script3.async = true;
            document.body.appendChild(script3);

            const script4 = document.createElement('script');
            script4.src = 'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js';
            script4.async = true;
            script4.onload = () => {
                const platform = new H.service.Platform({
                    apikey: 'fNkvwbGoJrOVRLvBHIa8Ldk4z6-Ic9sVj7hRqTekts0'
                });

                const defaultLayers = platform.createDefaultLayers();
                const map = new H.Map(
                    document.getElementById('mapContainer'),
                    defaultLayers.vector.normal.map,
                    {
                        zoom: 5,
                        center: { lat: 20.5, lng: 78.9 }
                    }
                );

                const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

                mapRef.current = map;
            };

            document.body.appendChild(script4);

            return () => {
                document.body.removeChild(script1);
                document.body.removeChild(script2);
                document.body.removeChild(script3);
                document.body.removeChild(script4);
            };
        }
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;

            // Remove existing markers
            markersRef.current.forEach(marker => map.removeObject(marker));
            markersRef.current = [];

            // Add new markers based on the state variables
            const markersArray = [];
            if (water) {
                markersArray.push(
                    { "lat": 19.1, "lng": 72.9 },
                    { "lat": 19.13, "lng": 72.95 },
                    { "lat": 19.1, "lng": 73 },
                    { "lat": 19.07, "lng": 72.95 },
                    { "lat": 19.05, "lng": 72.9 },
                    { "lat": 19.07, "lng": 72.85 },
                    { "lat": 19.1, "lng": 72.82 },
                    { "lat": 19.13, "lng": 72.85 },
                    { "lat": 28.6, "lng": 77.2 },
                    { "lat": 28.63, "lng": 77.25 },
                    { "lat": 28.6, "lng": 77.3 },
                    { "lat": 28.57, "lng": 77.25 },
                    { "lat": 28.55, "lng": 77.2 },
                    { "lat": 28.57, "lng": 77.15 },
                    { "lat": 28.6, "lng": 77.12 },
                    { "lat": 28.63, "lng": 77.15 },
                    { "lat": 22.5, "lng": 88.4 },
                    { "lat": 22.53, "lng": 88.45 },
                    { "lat": 22.5, "lng": 88.5 },
                    { "lat": 22.47, "lng": 88.45 },
                    { "lat": 22.45, "lng": 88.4 },
                    { "lat": 22.47, "lng": 88.35 },
                    { "lat": 22.5, "lng": 88.32 },
                    { "lat": 12.97, "lng": 77.59 },
                    { "lat": 12.99, "lng": 77.64 },
                    { "lat": 12.97, "lng": 77.69 },
                    { "lat": 12.94, "lng": 77.64 },
                    { "lat": 12.92, "lng": 77.59 },
                    { "lat": 12.94, "lng": 77.54 },
                    { "lat": 12.97, "lng": 77.51 },
                    { "lat": 12.99, "lng": 77.54 },
                    { "lat": 13.08, "lng": 80.27 },
                    { "lat": 13.1, "lng": 80.32 },
                    { "lat": 13.08, "lng": 80.37 },
                    { "lat": 13.05, "lng": 80.32 },
                    { "lat": 13.03, "lng": 80.27 },
                    { "lat": 13.05, "lng": 80.22 },
                    { "lat": 13.08, "lng": 80.19 },
                    { "lat": 13.1, "lng": 80.22 },
                    { "lat": 17.38, "lng": 78.48 },
                    { "lat": 17.4, "lng": 78.53 },
                    { "lat": 17.38, "lng": 78.58 },
                    { "lat": 17.35, "lng": 78.53 },
                    { "lat": 17.33, "lng": 78.48 },
                    { "lat": 17.35, "lng": 78.43 },
                    { "lat": 17.38, "lng": 78.4 },
                    { "lat": 17.4, "lng": 78.43 },
                    { "lat": 23.02, "lng": 72.57 },
                    { "lat": 23.05, "lng": 72.62 },
                    { "lat": 23.02, "lng": 72.67 },
                    { "lat": 22.99, "lng": 72.62 },
                    { "lat": 22.97, "lng": 72.57 },
                    { "lat": 22.99, "lng": 72.52 },
                    { "lat": 23.02, "lng": 72.49 },
                    { "lat": 23.05, "lng": 72.52 },
                    { "lat": 18.52, "lng": 73.85 },
                    { "lat": 18.55, "lng": 73.9 },
                    { "lat": 18.52, "lng": 73.95 },
                    { "lat": 18.49, "lng": 73.9 },
                    { "lat": 18.47, "lng": 73.85 },
                    { "lat": 18.49, "lng": 73.8 },
                    { "lat": 18.52, "lng": 73.77 },
                    { "lat": 18.55, "lng": 73.8 },
                    { "lat": 26.91, "lng": 75.79 },
                    { "lat": 26.93, "lng": 75.84 },
                    { "lat": 26.91, "lng": 75.89 },
                    { "lat": 26.88, "lng": 75.84 },
                    { "lat": 26.86, "lng": 75.79 },
                    { "lat": 26.88, "lng": 75.74 },
                    { "lat": 26.91, "lng": 75.71 },
                    { "lat": 26.93, "lng": 75.74 },
                    { "lat": 26.85, "lng": 80.94 },
                    { "lat": 26.88, "lng": 80.99 },
                    { "lat": 26.85, "lng": 81.04 },
                    { "lat": 26.82, "lng": 80.99 },
                    { "lat": 26.8, "lng": 80.94 },
                    { "lat": 26.82, "lng": 80.89 },
                    { "lat": 26.85, "lng": 80.86 },
                    { "lat": 26.88, "lng": 80.89 },
                    { "lat": 26.46, "lng": 80.32 },
                    { "lat": 26.48, "lng": 80.37 },
                    { "lat": 26.46, "lng": 80.42 },
                    { "lat": 26.43, "lng": 80.37 },
                    { "lat": 26.41, "lng": 80.32 },
                    { "lat": 26.43, "lng": 80.27 },
                    { "lat": 26.46, "lng": 80.24 },
                    { "lat": 26.48, "lng": 80.27 },
                    { "lat": 21.15, "lng": 79.09 },
                    { "lat": 21.17, "lng": 79.14 },
                    { "lat": 21.15, "lng": 79.19 },
                    { "lat": 21.12, "lng": 79.14 },
                    { "lat": 21.1, "lng": 79.09 },
                    { "lat": 21.12, "lng": 79.04 },
                    { "lat": 21.15, "lng": 79.01 },
                    { "lat": 21.17, "lng": 79.04 },
                    { "lat": 17.72, "lng": 83.3 },
                    { "lat": 17.75, "lng": 83.35 },
                    { "lat": 17.72, "lng": 83.4 },
                    { "lat": 17.69, "lng": 83.35 },
                    { "lat": 17.67, "lng": 83.3 },
                    { "lat": 17.69, "lng": 83.25 },
                    { "lat": 17.72, "lng": 83.22 },
                    { "lat": 17.75, "lng": 83.25 },
                    { "lat": 25.61, "lng": 85.14 },
                    { "lat": 25.63, "lng": 85.19 },
                    { "lat": 25.61, "lng": 85.24 },
                    { "lat": 25.58, "lng": 85.19 },
                    { "lat": 25.56, "lng": 85.14 },
                    { "lat": 25.58, "lng": 85.09 },
                    { "lat": 25.61, "lng": 85.06 },
                    { "lat": 25.63, "lng": 85.09 },
                    { "lat": 22.72, "lng": 75.86 },
                    { "lat": 22.74, "lng": 75.91 },
                    { "lat": 22.72, "lng": 75.96 },
                    { "lat": 22.69, "lng": 75.91 },
                    { "lat": 22.67, "lng": 75.86 },
                    { "lat": 22.69, "lng": 75.81 },
                    { "lat": 22.72, "lng": 75.78 },
                    { "lat": 22.74, "lng": 75.81 },
                    { "lat": 8.52, "lng": 76.95 },
                    { "lat": 8.54, "lng": 77 },
                    { "lat": 8.52, "lng": 77.05 },
                    { "lat": 8.49, "lng": 77 },
                    { "lat": 8.47, "lng": 76.95 },
                    { "lat": 8.49, "lng": 76.9 },
                    { "lat": 8.52, "lng": 76.87 },
                    { "lat": 8.54, "lng": 76.9 },
                    { "lat": 9.93, "lng": 76.26 },
                    { "lat": 9.95, "lng": 76.31 },
                    { "lat": 9.93, "lng": 76.36 },
                    { "lat": 9.9, "lng": 76.31 },
                    { "lat": 9.88, "lng": 76.26 },
                    { "lat": 9.9, "lng": 76.21 },
                    { "lat": 9.93, "lng": 76.18 },
                    { "lat": 9.95, "lng": 76.21 },
                    { "lat": 23.26, "lng": 77.41 },
                    { "lat": 23.28, "lng": 77.46 },
                    { "lat": 23.26, "lng": 77.51 },
                    { "lat": 23.23, "lng": 77.46 },
                    { "lat": 23.21, "lng": 77.41 },
                    { "lat": 23.23, "lng": 77.36 },
                    { "lat": 23.26, "lng": 77.33 },
                    { "lat": 23.28, "lng": 77.36 },
                    { "lat": 26.18, "lng": 91.75 },
                    { "lat": 26.2, "lng": 91.8 },
                    { "lat": 26.18, "lng": 91.85 },
                    { "lat": 26.15, "lng": 91.8 },
                    { "lat": 26.13, "lng": 91.75 },
                    { "lat": 26.15, "lng": 91.7 },
                    { "lat": 26.18, "lng": 91.67 },
                    { "lat": 26.2, "lng": 91.7 }
                );
            }
            if (air) {
                markersArray.push(
                    { "lat": 22.5726, "lng": 88.3639 },
                    { "lat": 22.5726, "lng": 88.3699 },
                    { "lat": 22.5726, "lng": 88.3579 },
                    { "lat": 22.5726, "lng": 88.3759 },
                    { "lat": 22.5726, "lng": 88.3519 },
                    { "lat": 23.2599, "lng": 77.4126 },
                    { "lat": 23.2599, "lng": 77.4186 },
                    { "lat": 23.2599, "lng": 77.4066 },
                    { "lat": 23.2599, "lng": 77.4246 },
                    { "lat": 23.2599, "lng": 77.4006 },
                    { "lat": 28.7041, "lng": 77.1025 },
                    { "lat": 28.7041, "lng": 77.1085 },
                    { "lat": 28.7041, "lng": 77.0965 },
                    { "lat": 28.7041, "lng": 77.1145 },
                    { "lat": 28.7041, "lng": 77.0905 },
                    { "lat": 19.0760, "lng": 72.8777 },
                    { "lat": 19.0760, "lng": 72.8837 },
                    { "lat": 19.0760, "lng": 72.8717 },
                    { "lat": 19.0760, "lng": 72.8897 },
                    { "lat": 19.0760, "lng": 72.8657 },
                    { "lat": 17.3850, "lng": 78.4867 },
                    { "lat": 17.3850, "lng": 78.4927 },
                    { "lat": 17.3850, "lng": 78.4807 },
                    { "lat": 17.3850, "lng": 78.4987 },
                    { "lat": 17.3850, "lng": 78.4747 },
                    { "lat": 13.0827, "lng": 80.2707 },
                    { "lat": 13.0827, "lng": 80.2767 },
                    { "lat": 13.0827, "lng": 80.2647 },
                    { "lat": 13.0827, "lng": 80.2827 },
                    { "lat": 13.0827, "lng": 80.2587 },
                    { "lat": 12.9716, "lng": 77.5946 },
                    { "lat": 12.9716, "lng": 77.6006 },
                    { "lat": 12.9716, "lng": 77.5886 },
                    { "lat": 12.9716, "lng": 77.6066 },
                    { "lat": 12.9716, "lng": 77.5826 },
                    { "lat": 25.5941, "lng": 85.1376 },
                    { "lat": 25.5941, "lng": 85.1436 },
                    { "lat": 25.5941, "lng": 85.1316 },
                    { "lat": 25.5941, "lng": 85.1496 },
                    { "lat": 25.5941, "lng": 85.1256 },
                    { "lat": 26.9124, "lng": 75.7873 },
                    { "lat": 26.9124, "lng": 75.7933 },
                    { "lat": 26.9124, "lng": 75.7813 },
                    { "lat": 26.9124, "lng": 75.7993 },
                    { "lat": 26.9124, "lng": 75.7753 },
                    { "lat": 21.1466, "lng": 79.0882 },
                    { "lat": 21.1466, "lng": 79.0942 },
                    { "lat": 21.1466, "lng": 79.0822 },
                    { "lat": 21.1466, "lng": 79.1002 },
                    { "lat": 21.1466, "lng": 79.0762 }
                );
            }
            if (land) {
                markersArray.push(
                    { "lat": 28.6961, "lng": 77.3447 },
                    { "lat": 28.6961, "lng": 77.3507 },
                    { "lat": 28.6961, "lng": 77.3387 },
                    { "lat": 28.6961, "lng": 77.3567 },
                    { "lat": 28.6961, "lng": 77.3327 },
                    { "lat": 25.1574, "lng": 82.5772 },
                    { "lat": 25.1574, "lng": 82.5832 },
                    { "lat": 25.1574, "lng": 82.5712 },
                    { "lat": 25.1574, "lng": 82.5892 },
                    { "lat": 25.1574, "lng": 82.5652 },
                    { "lat": 12.7601, "lng": 78.1090 },
                    { "lat": 12.7601, "lng": 78.1150 },
                    { "lat": 12.7601, "lng": 78.1030 },
                    { "lat": 12.7601, "lng": 78.1210 },
                    { "lat": 12.7601, "lng": 78.0970 },
                    { "lat": 15.5824, "lng": 74.3136 },
                    { "lat": 15.5824, "lng": 74.3196 },
                    { "lat": 15.5824, "lng": 74.3076 },
                    { "lat": 15.5824, "lng": 74.3256 },
                    { "lat": 15.5824, "lng": 74.3016 },
                    { "lat": 27.2962, "lng": 78.0514 },
                    { "lat": 27.2962, "lng": 78.0574 },
                    { "lat": 27.2962, "lng": 78.0454 },
                    { "lat": 27.2962, "lng": 78.0634 },
                    { "lat": 27.2962, "lng": 78.0394 },
                    { "lat": 22.7279, "lng": 88.3905 },
                    { "lat": 22.7279, "lng": 88.3965 },
                    { "lat": 22.7279, "lng": 88.3845 },
                    { "lat": 22.7279, "lng": 88.4025 },
                    { "lat": 22.7279, "lng": 88.3785 },
                    { "lat": 26.9184, "lng": 75.8728 },
                    { "lat": 26.9184, "lng": 75.8788 },
                    { "lat": 26.9184, "lng": 75.8668 },
                    { "lat": 26.9184, "lng": 75.8848 },
                    { "lat": 26.9184, "lng": 75.8608 },
                    { "lat": 10.9621, "lng": 76.3708 },
                    { "lat": 10.9621, "lng": 76.3768 },
                    { "lat": 10.9621, "lng": 76.3648 },
                    { "lat": 10.9621, "lng": 76.3828 },
                    { "lat": 10.9621, "lng": 76.3588 },
                    { "lat": 25.0143, "lng": 87.3236 },
                    { "lat": 25.0143, "lng": 87.3296 },
                    { "lat": 25.0143, "lng": 87.3176 },
                    { "lat": 25.0143, "lng": 87.3356 },
                    { "lat": 25.0143, "lng": 87.3116 }
                );
            }
            if (rainfall) {
                markersArray.push(
                    { "lat": 26.9124, "lng": 75.7873 },
                    { "lat": 26.9139, "lng": 75.7860 },
                    { "lat": 26.9110, "lng": 75.7879 },
                    { "lat": 26.9118, "lng": 75.7852 },
                    { "lat": 26.9132, "lng": 75.7895 },
                    { "lat": 24.5854, "lng": 73.7125 },
                    { "lat": 24.5869, "lng": 73.7112 },
                    { "lat": 24.5840, "lng": 73.7131 },
                    { "lat": 24.5848, "lng": 73.7104 },
                    { "lat": 24.5862, "lng": 73.7147 },
                    { "lat": 25.4382, "lng": 78.5682 },
                    { "lat": 25.4397, "lng": 78.5669 },
                    { "lat": 25.4368, "lng": 78.5688 },
                    { "lat": 25.4376, "lng": 78.5661 },
                    { "lat": 25.4390, "lng": 78.5704 },
                    { "lat": 21.3695, "lng": 79.2482 },
                    { "lat": 21.3710, "lng": 79.2469 },
                    { "lat": 21.3681, "lng": 79.2488 },
                    { "lat": 21.3689, "lng": 79.2461 },
                    { "lat": 21.3703, "lng": 79.2504 },
                    { "lat": 25.4776, "lng": 85.7050 },
                    { "lat": 25.4791, "lng": 85.7037 },
                    { "lat": 25.4762, "lng": 85.7056 },
                    { "lat": 25.4770, "lng": 85.7029 },
                    { "lat": 25.4784, "lng": 85.7072 },
                    { "lat": 17.6868, "lng": 83.2185 },
                    { "lat": 17.6883, "lng": 83.2172 },
                    { "lat": 17.6854, "lng": 83.2191 },
                    { "lat": 17.6862, "lng": 83.2164 },
                    { "lat": 17.6876, "lng": 83.2207 },
                    { "lat": 22.8046, "lng": 86.2029 },
                    { "lat": 22.8061, "lng": 86.2016 },
                    { "lat": 22.8032, "lng": 86.2035 },
                    { "lat": 22.8040, "lng": 86.2008 },
                    { "lat": 22.8054, "lng": 86.2051 },
                    { "lat": 12.9716, "lng": 77.5946 },
                    { "lat": 12.9731, "lng": 77.5933 },
                    { "lat": 12.9702, "lng": 77.5952 },
                    { "lat": 12.9710, "lng": 77.5925 },
                    { "lat": 12.9724, "lng": 77.5968 },
                    { "lat": 22.5726, "lng": 88.3639 },
                    { "lat": 22.5741, "lng": 88.3626 },
                    { "lat": 22.5712, "lng": 88.3645 },
                    { "lat": 22.5720, "lng": 88.3618 },
                    { "lat": 22.5734, "lng": 88.3661 },
                    { "lat": 23.2599, "lng": 77.4126 },
                    { "lat": 23.2614, "lng": 77.4113 },
                    { "lat": 23.2585, "lng": 77.4132 },
                    { "lat": 23.2593, "lng": 77.4105 },
                    { "lat": 23.2607, "lng": 77.4148 }
                );
            }

            markersArray.forEach(markerData => {
                try {
                    const marker = new H.map.Marker(markerData);
                    
                    marker.addEventListener('tap', (e) => {

                        const { lat, lng } = e.target.getGeometry();
                    
                        setdata({ lat, lng });
                        console.log(data)
                        console.log('this is data')
                    });
                    map.addObject(marker);
                    markersRef.current.push(marker);
                } catch (error) {
                    console.error('Error adding marker:', error);
                }
            });
        }
    }, [water, air, land, rainfall]);
    useEffect(() => {
        console.log('New data:', data);
    }, [data]);


    return (
        <>
            <Card />
            <div id='mapContainer' style={{ width: '100%', height: '100vh', overflow: 'hidden' }}></div>
        </>
    );
}

export default Map;
