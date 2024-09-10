import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthStatus, LoginResponse } from '../../interfaces';
import { environments } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {


  private loadingSubject = new BehaviorSubject<boolean>(true); // Estado de carga
  public loading$ = this.loadingSubject.asObservable(); // Observable para el estado de carga

  private baseUrl = environments.baseUrl; 
  private readonly USER_KEY = 'currentUser'; // Clave para almacenar el usuario en localStorage

 
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  private user?: User; // Propiedad para almacenar el usuario actual

  // Computed properties para acceder al usuario actual y al estado de autenticación
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadUserFromStorage(); // Cargar el usuario desde localStorage al iniciar
  }


  login(Username: string, Password: string): Observable<boolean> {
    const url = `${this.baseUrl}/api/login`; 
    const body = { Username, Password }; 

    return this.http.post<LoginResponse>(url, body).pipe(
      tap((response) => {
        const { resultado, data_user } = response; // Desestructurar la respuesta
        console.log('Respuesta del servidor:', response);

        // Verifica si el resultado es exitoso
        if (resultado === 1 && data_user.length > 0) {
          const user = data_user[0]; // Obtener el usuario del array
          this.saveUserToStorage(user); // Guardar el usuario en localStorage
          this._currentUser.set(user); // Establecer el usuario actual
          this.user = user; // Asignar el usuario a la propiedad user
          this._authStatus.set(AuthStatus.authenticated); // Cambiar el estado a autenticado
          console.log({ username: user.username });
        } else {
          
          throw new Error('User or password incorrect');
        }
      }),
      map(() => true), 
      catchError((err) => {
        // Captura el error y extrae el mensaje
        const errorMessage = err.error?.message || 'Error desconocido';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  
  logout() {
    this.removeUserFromStorage(); // Eliminar el usuario del localStorage
    this._currentUser.set(null); // Limpiar el usuario actual
    this.user = undefined; // Limpiar la propiedad user
    this._authStatus.set(AuthStatus.notAuthenticated); // Cambiar el estado a no autenticado
  }

  // Método para guardar el usuario en localStorage
  private saveUserToStorage(user: User) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user)); // Guardar el usuario en localStorage
    }
  }

  // Método para cargar el usuario desde localStorage
  private loadUserFromStorage() {
    this.loadingSubject.next(true);
    if (isPlatformBrowser(this.platformId)) {
      const userJson = localStorage.getItem(this.USER_KEY); // Obtener el usuario del localStorage
      if (userJson) {
        const user = JSON.parse(userJson); // Parsear el JSON a un objeto User
        this._currentUser.set(user); // Establecer el usuario actual
        this.user = user; // Asignar el usuario a la propiedad user
        this._authStatus.set(AuthStatus.authenticated); // Cambiar el estado a autenticado
      } else {
        this._authStatus.set(AuthStatus.notAuthenticated); // Cambiar el estado a no autenticado
      }
    } else {
      // Si no se está en un navegador, establecer el estado como no autenticado
      this._authStatus.set(AuthStatus.notAuthenticated);
    }
    this.loadingSubject.next(false);
  }

  // Método para eliminar el usuario del localStorage
  private removeUserFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.USER_KEY); // Eliminar el usuario del localStorage
    }
  }
}