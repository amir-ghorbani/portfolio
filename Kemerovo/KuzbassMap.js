mapboxgl.accessToken = 'pk.eyJ1IjoiYWdob3JiYW5pZGVzaWduIiwiYSI6ImNrb2d5ZGI0djBrM2sybnBsc3A2MzI0NXUifQ.KZc3jjkBbpckpzGMmSscqQ';

var map01 = new mapboxgl.Map({
  container: 'map01',
  style: 'mapbox://styles/aghorbanidesign/ckoooqnh32z9317lekb4v31j7',
  center: [87, 54.5],
  zoom: 6
});

// code from the next step will go here!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.213288, 55.537439]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Kedrovsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Kedrovsky.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.957909, 53.626042]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Rassvet',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Rassvet.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.738430, 53.951115]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Kiselyovsk',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Kiselyovsk.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.563352, 54.156265]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Krasnobrodsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Krasnobrodsky.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.242106, 54.255445]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Bachatsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Bachatsky.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.429410, 54.574920]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Mokhovsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Mokhovsky02.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [86.640876, 54.555809]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Mokhovsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Mokhovsky01.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [87.260103, 54.127516]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Taldinsky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Taldinsky.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [87.418195, 53.395256]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Kaltansky',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Kaltansky.gif'
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [87.957957, 53.588301]
    },
    properties: {
      title: 'Coal Mine',
      name: 'Mezhdurechensk',
      description: '1984 - 2020 Google Earth Satellite Images'
    },
    gif: './Mezhdurechensk.gif'
  }]
};
// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';



// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
    // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    
    .setHTML('<h3>' + marker.properties.title + ' : ' + marker.properties.name + '</h3>' + '<p>' + marker.properties.description + '</p>' + `<img src="${marker.gif}">`))
    .addTo(map01)
    // .setLngLat(marker.geometry.coordinates);
});