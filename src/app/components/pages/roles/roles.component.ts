import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RolesService } from '../../services/roles.service';
import { NewRole, Role, RolePermissions } from '../../interfaces/roles.interfaces';
import { ListPermisosComponent } from './dialogs/list-permisos/list-permisos.component';
import { AddRolDialogComponent } from './dialogs/add-rol-dialog/add-rol-dialog.component';

@Component({
  templateUrl: './roles.component.html',
  styles: ``
})
export class RolesComponent implements OnInit {


  public permisos: RolePermissions[] = [];

  public roles: Role[] = [];


  constructor( private permisosService: RolesService, private dialog: MatDialog){

  }


  ngOnInit(): void {
    this.permisosService.getPermisos().subscribe(
        units => {
            console.log('permisos recibidos:', units);
            this.permisos = units;
        },
        error => {
            console.error('Error al obtener los permisos:', error);
            this.permisos = [];
        }
    );

    this.permisosService.getRoles().subscribe(
      units => {
          console.log('roles recibidos:', units);
          this.roles = units;
      },
      error => {
          console.error('Error al obtener los permisos:', error);
          this.roles = [];
      }
  );
}


showPermisos(roleId: any) {
  this.permisosService.getPermisoById(roleId).subscribe(permisos => {
    const dialogRef = this.dialog.open(ListPermisosComponent, {
      width: '600px',
      data: permisos // Pasar los permisos al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
      // Aquí puedes manejar el resultado si es necesario
    });
  });
}

openAddRoleDialog() {
  const dialogRef = this.dialog.open(AddRolDialogComponent, {
    width: '400px',
    data: {} // Si necesitas pasar datos al diálogo, lo puedes hacer aquí
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Si se devuelve un resultado, puedes agregarlo a la lista de roles
      this.roles.push(result);
    }
  });
}




togglePermission(permiso: RolePermissions, permissionKey: string): void {
  // Aquí puedes implementar la lógica para manejar el cambio de permisos.
  // Por ejemplo, podrías enviar una solicitud al servidor para actualizar los permisos.
  console.log(`Toggled ${permissionKey} for`, permiso);
  
  // Si deseas cambiar localmente solo para la vista:

}
}
