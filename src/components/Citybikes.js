import React, { useState, useEffect } from "react";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import MarkerImg from '../assets/Marker.png';

function Citybikes() {
    // Declare viewport as the map canvas
    const [viewport, setViewport] = useState({
        latitude: 60.1619311,
        longitude: 24.9214896,
        width: "1000px",
        height: "700px",
        zoom: 13
      });
    // Store bikestops data array
      const [bikeStops, setBikeStops] = useState([]);
    // Store the value of a selected bikestop, intitially null
      const [selectedStop, setSelected] = useState(null);

    // GraphQL query for getting bikestops
      const queryForBikeStops = 
      `{
        bikeRentalStations {
          stationId
          name
          lat
          lon
          bikesAvailable
          spacesAvailable
        }
      }`
    // HTTP post to api endpoint
      const getBikeStops = async () => {
        await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            query: queryForBikeStops
          }),
        })
        .then(response => response.json())
        .then(data => {
          setBikeStops(data.data.bikeRentalStations);
          console.log("Fetched bikestops");
        })
        .catch((error) => {
          console.log('Error', error);
        })
      }

    //getBikeStops();
      //console.log(bikeStops[0]);
      console.log("re-rendered ");
    // Run getBikeStops() on render
      useEffect(() => {getBikeStops()}, []);

    return(
        <div>
            <div>Coodinates: {viewport.latitude + ', ' + viewport.longitude + ', '}</div>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
            mapStyle='mapbox://styles/feelikskilpi/ckn9xjg352eh718pf27f3hips'
            onViewportChange={(viewport) => {setViewport(viewport)}}
            >
            {bikeStops.map((bikestop) => (
            <Marker key={bikestop.stationId} latitude={bikestop.lat} longitude={bikestop.lon}>
                
                <button onClick={(e) => {
                    e.preventDefault();
                    setSelected(bikestop);
                }}
                style={{border: 'none', background: 'Transparent'}}>
                <img src={MarkerImg} alt="BikeStation" style={{width: 50, height: 50}}/>
                </button>
            </Marker>
            ))}
        {selectedStop ? (
            <Popup 
            latitude={selectedStop.lat} 
            longitude={selectedStop.lon}
            onClose={() => {
                setSelected(null);
            }}
            >
                <div>
                    <h3>{selectedStop.stationId + ' - ' + selectedStop.name}</h3>
                    <p>{'Vapaita pyöriä: ' + selectedStop.bikesAvailable}</p>
                    <p>{'Tyhjiä paikkoja: ' + selectedStop.spacesAvailable}</p>
                </div>
            </Popup>
        ) : null}
     </ReactMapGL>
    </div>
    );
}

export default Citybikes;