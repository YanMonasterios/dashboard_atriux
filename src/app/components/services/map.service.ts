import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places.interfaces';
import { HttpClient } from '@angular/common/http';
import { DirectionsResponse, Route } from '../interfaces/directions';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {


  private map?: Map;
  private markers: Marker[] = [];

  get isMapReady(){
    // retorna un true si tiene valor
    return !!this.map
  }

  constructor( private http: HttpClient ) {}

  setMap(map: Map){
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('el mapa no esta inicializado');
    
    this.map?.flyTo({
      zoom: 14,
      center: coords
    });
  }

createMarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw Error('Mapa no inicializado');

    // Borra los marcadores existentes
    this.markers.forEach(marker => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
        const [lng, lat] = place.geometry.coordinates; // Cambia esto para acceder a las coordenadas correctas
        const popup = new Popup()
            .setHTML(`
                <h6>${place.properties.name}</h6>
                <span>${place.properties.full_address}</span>
            `);

        const newMarker = new Marker()
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(this.map);
        
        newMarkers.push(newMarker);
    }

    this.markers = newMarkers;



    // para que aparezcan todos los lugares, limites del mapa 
    if (places.length === 0) return;
    const bounds = new LngLatBounds();
    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    bounds.extend(userLocation);
    
    
    this.map.fitBounds(bounds, {
      padding: 200
    })
}

// metodos para aplicar la captura de un punto a otro
getRouteBetweenPoints(start:[number,number], end:[number,number]) {

  this.http.get<DirectionsResponse>(`https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(',')};${end.join(',')}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiYXRyaXV4ZGlvciIsImEiOiJjbTB5Zmd3cXYwbnluMnNxM3pwYzdqbmh5In0.j0iwWvxXungrWmMkU3nIsQ`)
  .subscribe(resp => 
    this.drawPolyline(resp.routes[0])
    // console.log(resp)
  );

}

private drawPolyline(route: Route) {

  // imprimir distancia y kilometros
  console.log({kms: route.distance / 1000, duration: route.duration /60});

  if (!this.map) throw Error('mapa no inicializado');

  const coords = route.geometry.coordinates;

  const bounds = new LngLatBounds();
  coords.forEach( ([ lng, lat ]) => {
    bounds.extend([ lng, lat ]);
  });


  this.map?.fitBounds(bounds, {
    padding:200
  });

  // polyline
  const sourceData: AnySourceData = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coords
          }
        }
      ]
    }
  }

  // limpiar ruta previa
  if ( this.map.getLayer('RouteString') ) {
    this.map.removeLayer('RouteString');
    this.map.removeSource('RouteString');
  }


  this.map.addSource('RouteString', sourceData );


  // forma del line
  this.map.addLayer({
    id: 'RouteString',
    type: 'line',
    source: 'RouteString',
    layout: {
      'line-cap': 'round',
      'line-join':'round'
    },
    paint: {
      'line-color': 'black',
      'line-width': 3
    }
  });




}

}
