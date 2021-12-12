import React, { useState } from 'react';
import './map.css';
import map1 from '../../assets/pictures/map1.jpg';
import map2 from '../../assets/pictures/map2.jpg';
import squareXmark from '../../assets/icons/square-xmark.svg';

const Map = ({isFull}) => {
    const [ mapVisible, changeVisibility ] = useState(true);
    return (
        <div id="map-container" className={(isFull) ? "map-col-normal": "map-orangish"}>
            { (mapVisible) ?
                <div id="map-section">
                    <div className="map-header">
                        <span id="header-text">Convention Maps</span>
                        <span id="map-toggle" onClick={ () => changeVisibility(false)}>
                            <img
                            src={squareXmark} />
                        </span>
                    </div>
                <img src={map1} className="mapPictures" />
                <img src={map2} className="mapPictures" />
            </div>
            :
            <div id="show-map" onClick={ () => changeVisibility(true)}>
                Show Map
            </div>}
        </div>
    )
}


export default Map;