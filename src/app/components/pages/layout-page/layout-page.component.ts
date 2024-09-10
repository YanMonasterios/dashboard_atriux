import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/pages/services/auth.services';

@Component({
  templateUrl: './layout-page.component.html',
  styles: ``,
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  private authServices = inject( AuthService )

  public user = computed(() => this.authService.currentUser() );

  // get user() {
  //   return this.authService.currentUser();
  // }

  public sidebarItems = [
    {label: 'Unidades Organizativas', icon: 'label', url: './unidades-organizativas'},
    {label: 'Rutas', icon:  'map',   url:   './rutas'},
    {label: 'Unidades Ventas', icon: 'label', url: './unidades-ventas'},
    // {label: 'Buscar', icon: 'search', url: './search'},
  ]

  constructor(private authService: AuthService, private router: Router){}
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
