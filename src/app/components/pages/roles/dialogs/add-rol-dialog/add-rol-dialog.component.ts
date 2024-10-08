import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { NewRole } from '../../../../interfaces/roles.interfaces'; // Importa la nueva interfaz
import { RolesService } from '../../../../services/roles.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './add-rol-dialog.component.html',
  styles: ``
})
export class AddRolDialogComponent implements OnInit {

  public rolForm = new FormGroup({
    Code: new FormControl<string>(''),
    Description: new FormControl<string>('', { nonNullable: true }),
    Sales_Organizations_id: new FormControl<number>(0) // Asegúrate de que sea un número
  });

  get currentRol(): NewRole {
    return {
      Code: this.rolForm.value.Code || '',
      Description: this.rolForm.value.Description || '',
      Sales_Organizations_id: this.rolForm.value.Sales_Organizations_id || 0,
    };
  }

  constructor(
    private rolService: RolesService,
    public dialogRef: MatDialogRef<AddRolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewRole // Cambia a NewRole si es necesario
  ) {}

  closeDialog() {
    this.dialogRef.close(); 
  }

  onSubmit() {
    if (this.rolForm.invalid) return;

    this.rolService.addRol(this.currentRol).subscribe(
      (rol) => {
        console.log('Rol agregada:', rol);
        Swal.fire({
          title: 'Éxito!',
          text: 'El rol ha sido agregado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.dialogRef.close(rol); // Cierra el diálogo y pasa los datos
      },
      (error) => {
        console.error('Error al agregar el rol:', error);
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo agregar el rol. Intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  ngOnInit(): void {}
}