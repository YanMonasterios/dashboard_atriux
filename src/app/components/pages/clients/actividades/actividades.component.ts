import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActividadesComponent } from '../dialogs/add-actividades/add-actividades.component';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styles: ``
})
export class ActividadesComponent {
  constructor(private dialog: MatDialog) {}

  abrirNuevaActividad() {
    this.dialog.open(AddActividadesComponent, {
      width: '400px'
    });
  }
}
