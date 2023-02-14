const DEFAULT_ZOOM = 20;
const LOCATION = {
  LAT: 59.968321,
  LNG: 30.317462,
};
const INIT_LOCATION = {
  LAT: 59.968385,
  LNG: 30.317392,
};
const PIN_ICON_WIDTH = 38;
const PIN_ICON_HEIGHT = 50;
const PIN_IMAGE = 'img/pin-map.svg';

document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map', {
    scrollWheelZoom: false
  });
  const mainMarker = L.marker([0,0]);
  const openStreetMapLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  );

  const mainPinIcon = L.icon({
    iconUrl: PIN_IMAGE,
    iconSize: [PIN_ICON_WIDTH, PIN_ICON_HEIGHT],
    iconAnchor: [PIN_ICON_WIDTH / 2, PIN_ICON_HEIGHT],
  });

  const createMarker = () => {
    mainMarker
      .setLatLng(
        {
          lat: LOCATION.LAT,
          lng: LOCATION.LNG,
        })
      .setIcon(mainPinIcon)
      .addTo(map)
  };

  (function () {
    map
      .setView(
        {
          lat: INIT_LOCATION.LAT,
          lng: INIT_LOCATION.LNG,
        },
        DEFAULT_ZOOM
      );

    openStreetMapLayer.addTo(map);
    createMarker();
  })();
});
