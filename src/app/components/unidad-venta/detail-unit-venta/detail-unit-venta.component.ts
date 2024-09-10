import { Component } from '@angular/core';
import { UnidadVentaConfirmDialogComponent } from '../dialogs/unidad-venta-confirm-dialog/unidad-venta-confirm-dialog.component';

import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { unitOrganizations } from '../../interfaces/data.interfaces';
import { switchMap } from 'rxjs';
import { SalesService } from '../../services/sales-organizations.service';

@Component({
  templateUrl: './detail-unit-venta.component.html',
  styles: ``
})
export class DetailUnitVentaComponent {

    public unit?: unitOrganizations;

  constructor(private unitService: SalesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      // delay(3000),
      switchMap(({id}) => this.unitService.getUnitById(id)),
    )
    .subscribe(unit => {

      if (!unit) return this.router.navigate(['/pages/unidades-ventas']);
        
      this.unit = unit;
      console.log({unit})
      return;
    })
  }

  goBack():void {

    this.router.navigateByUrl('pages/unidades-ventas')

  }

  get currentUnit(): unitOrganizations {
    // Asegurar que la unidad no sea undefined
    if (!this.unit) {
      throw new Error('Unidad no está definida');
    }
    return this.unit; // Devuelve la unidad actual
  }

  onDeleteUnit() {
    const unitId = this.currentUnit.id; // se obtiene la unidad actual

    // Verifica que unitId esté definido
    if (!unitId) {
        console.error('ID de unidad no está definido');
        return; // Salir si no hay ID
    }

    const dialogRef = this.dialog.open(UnidadVentaConfirmDialogComponent, {
        data: { Description: this.currentUnit.Description } // Pasa la descripción de la unidad al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('dialog closed');
        if (!result) return; // Si el usuario no confirma, salir

        console.log('deleted');

        // Llama al servicio de eliminación
        this.unitService.deleteUnitById(unitId).subscribe(success => {
            if (success) {
                console.log('Unidad eliminada exitosamente');
                this.router.navigate(['/pages/unidades-ventas']); // Redirige a la lista de unidades
            } else {
                console.error('Error al eliminar la unidad');
            }
        });
    });
}


}
