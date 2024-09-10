import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales-organizations.service';
import { unitOrganizations } from '../../interfaces/data.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { UnitVentaDialogComponent } from '../dialogs/unit-venta-dialog/unit-venta-dialog.component';
import { UnitVentaEditDialogComponent } from '../dialogs/unit-venta-edit-dialog/unit-venta-edit-dialog.component';



import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';


@Component({
  templateUrl: './unidad-venta.component.html',
  styles: ``,
  styleUrl: './unidad-venta.component.css'
})
export class UnidadVentaComponent implements OnInit{




  public units: unitOrganizations[] = [];
  public emptyUnit: unitOrganizations = { // Define emptyUnit aquí
    Code: '',
    Description: '',
    created_at: ''
  };


  public filteredUnits: unitOrganizations[] = []; // Para almacenar las unidades filtradas

  public searchTerm: string = ''; 



  constructor( private unitService: SalesService, private dialog: MatDialog){

  }


  ngOnInit(): void {
    this.unitService.getUnitSales().subscribe(
        units => {
            console.log('Unidades recibidas:', units);
            this.units = units;
            this.filteredUnits = units; // Inicializa filteredUnits con todas las unidades
        },
        error => {
            console.error('Error al obtener unidades:', error);
            this.units = [];
            this.filteredUnits = [];
        }
    );
}
  

openDialog(unit: unitOrganizations) {
  const dialogRef = this.dialog.open(UnitVentaDialogComponent, {
    data: unit // Pasa la unidad como datos al diálogo
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Aquí puedes agregar la lógica para manejar el resultado
      console.log('Unidad agregada:', result);
      this.units.push(result); // Agrega la nueva unidad a la lista
    }
  });
}


openDialogEdit(unit: unitOrganizations) {
  console.log('Unidad a editar:', unit); // Verifica que el ID esté presente
  const dialogRef = this.dialog.open(UnitVentaEditDialogComponent, {
      data: unit // Pasa la unidad como datos al diálogo
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
          console.log('Unidad editada:', result);
          const index = this.units.findIndex(u => u.id === result.id);
          if (index !== -1) {
              this.units[index] = result; // Actualiza la unidad editada
          }
      }
  });
}



filterUnits() {
  if (!this.searchTerm) {
      this.filteredUnits = this.units; // Si el término de búsqueda está vacío, muestra todas las unidades
      return;
  }
  this.filteredUnits = this.units.filter(unit => 
      (unit.Code?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) || 
      (unit.Description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false)
  );
}


// excel
exportToExcel() {
  // Crear un nuevo libro de trabajo
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.units);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  
  // Agregar la hoja de trabajo al libro
  XLSX.utils.book_append_sheet(wb, ws, 'Unidades');

  // Generar el archivo Excel
  const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  
  // Crear un Blob y guardarlo
  const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
  saveAs(data, 'unidades_ventas.xlsx');
}


}
