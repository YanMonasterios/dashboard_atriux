import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environment';
import { Role, RolePermissions } from '../interfaces/roles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RolesService {


  private basUrl: string = environments.baseUrl

  constructor(private http: HttpClient) { }


  getPermisos():Observable<RolePermissions[]> {

    return this.http.get<RolePermissions[]>(`${this.basUrl}/api/permissions`);
  }

  getPermisoById( id: string ): Observable<RolePermissions | undefined> {
    return this.http.get<RolePermissions>(`${this.basUrl}/api/permissions/show_id/${id}`)
    .pipe(
        catchError( error => of(undefined) )
    );
}

  getRoles():Observable<Role[]> {
    return this.http.get<Role[]>(`${this.basUrl}/api/roles`);
  }

  addRol( rol: Role ): Observable<Role> {

    return this.http.post<Role>(`${this.basUrl}/api/roles/insert`, rol);
}

  updateRol( rol: Role ): Observable<Role> {

    return this.http.post<Role>(`${this.basUrl}/api/roles/update`, rol);

  }




}
