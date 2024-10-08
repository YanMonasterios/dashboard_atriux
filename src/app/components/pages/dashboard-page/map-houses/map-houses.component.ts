import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../../../services/places.service';

@Component({
  templateUrl: './map-houses.component.html',
  styles: ``
})
export class MapHousesComponent {

  constructor(private router: Router, private placesService: PlacesService) {}

  navigateToDashboard() {
    this.router.navigate(['/mapa']); // Esto debería funcionar
  }

}
