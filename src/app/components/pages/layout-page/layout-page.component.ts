import { Component, computed, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/pages/services/auth.services';

import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  templateUrl: './layout-page.component.html',
  styles: ``,
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  private authServices = inject( AuthService )

  public user = computed(() => this.authService.currentUser() );

  // get user() {
  //   return this.authService.currentUser();
  // }

  public sidebarItems = [
    {label: 'Dashboard', icon: 'home', url: './dashboard'},
    {label: 'Unidades Organizativas', icon: 'label', url: './unidades-organizativas'},
    {label: 'Unidades Ventas', icon: 'label', url: './unidades-ventas'},
    {label: 'Rutas', icon:  'map',   url:   './rutas'},
    {label: 'Usuarios', icon:  'supervised_user_circle',   url:   './usuarios'},
    {label: 'Clientes', icon:  'group',   url:   './clientes'},
    {label: 'Roles', icon:  'domain',   url:   './roles'},
    // {label: 'Buscar', icon: 'search', url: './search'},
  ]

  constructor(private authService: AuthService, private router: Router){}
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }


  onSettings() {
    this.router.navigate(['/pages/settings'])
  }

  // someMethod() {
  //   this.trigger.openMenu();
  // }

}
