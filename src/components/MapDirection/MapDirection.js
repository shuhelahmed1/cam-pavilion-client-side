// import React, {useEffect} from 'react';
// import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1aGVsYWhtZWQiLCJhIjoiY2wwbnF3NzkzMWJ1cjNtcnZmMGJ2bG5kcyJ9.LyaGlawlLczWehk5SqekhQ';
// const MapDirection = () => {
//     useEffect(()=>{
//         const map = new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [90.328712, 24.098379],
//             zoom: 13
//             });
             
//             map.addControl(
//             new MapboxDirections({
//             accessToken: mapboxgl.accessToken
//             }),
//             'top-left'
//             );
//     },[])
//     return (
//         <div>
//         <div className='map-container'></div>
//         <div id="map"></div>
//         </div>
//     );
// };

// export default MapDirection;