mapboxgl.accessToken = 'pk.eyJ1IjoiYWdob3JiYW5pZGVzaWduIiwiYSI6ImNrb2d5ZGI0djBrM2sybnBsc3A2MzI0NXUifQ.KZc3jjkBbpckpzGMmSscqQ';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/aghorbanidesign/ckokbbm0j0dqo17pbupx04gsw', // style URL
  center: [-5, 40], // starting position [lng, lat]
  zoom: 1.2 // starting zoom
});

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['globalCoalPowerPlantDatabase'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, 0] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3 class="popCoalInWorld">Name: ' + feature.properties.Name + '</h3>' + '<h3 class="popCoalInWorld">Location: ' + feature.properties.Country + '</h3><p class="popCoalInWorld">Primary Fuel: ' + '<b>' + feature.properties.primary_fuel + '</b>' + '</p>' + '</h3 class="popCoalInWorld"><p class="popCoalInWorld">Capacity (mw): ' + '<b>' + feature.properties.capacity_mw + '</b>' + '</p>' + '<a class=' + '"popCoalInWorld"' + 'href=' + feature.properties.url + '><u>Data Source</u></a>')
    .addTo(map);
});