import * as Cesium from 'cesium'; 

const cesiumAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTkyNjllNS04ZTMwLTRhY2MtYjM1Ny1hMzhmMGI2ZGRlOWQiLCJpZCI6MjY5ODk1LCJpYXQiOjE3MzcyMjEzMzB9.92HCfXOYGMjHUCGj2FzJeScdbPilkqQ7BL5eVOicRho";

const targetLocation = {
  destination: Cesium.Cartesian3.fromDegrees(/*123.064198*/ 123.064086, /*0.522333*/ 0.483838, 1000), // Koordinat Jakarta
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0),
  },
};
export { cesiumAccessToken, targetLocation };
