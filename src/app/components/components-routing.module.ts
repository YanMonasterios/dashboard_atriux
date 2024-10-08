import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/detail-unit/new-page.component';
import { SearchPageComponent } from './pages/settings-page/search-page.component';
import { ListPageComponent } from './pages/unidad_organizativa-page/list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/mapComplete/dashboard-page.component';

import { UnidadVentaComponent } from './unidad-venta/unidad-venta/unidad-venta.component';
import { DetailUnitVentaComponent } from './unidad-venta/detail-unit-venta/detail-unit-venta.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MapHousesComponent } from './pages/dashboard-page/map-houses/map-houses.component';
import { UsersComponent } from './pages/users/users.component';
import { ClientsComponent } from './pages/clients/clients-list/clients.component';
import { ClientDetailComponent } from './pages/clients/client-detail/client-detail.component';
import { ZoomPageComponent } from './pages/dashboard-page/zoom-page/zoom-page.component';
import { RolesComponent } from './pages/roles/roles.component';


// localhost:4200/pages
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-page', component: NewPageComponent },
      { path: 'settings', component: SearchPageComponent },
      { path: 'unidades-organizativas/:id', component: NewPageComponent },
      { path: 'unidades-organizativas', component: ListPageComponent },
      // { path: ':id', component: DashboardPageComponent },
      // rutas
      { path: 'rutas', component: MapHousesComponent },
      { path: 'mapa', component: DashboardPageComponent },
      { path: 'zoom-mapa', component: ZoomPageComponent },

      // unidades de ventas :
      { path: 'unidades-ventas/:id', component: DetailUnitVentaComponent },
      { path: 'unidades-ventas', component: UnidadVentaComponent },
      // dashboard 
      { path: 'dashboard', component: DashboardComponent },
      // users
      { path: 'usuarios', component: UsersComponent },
      // clients
      { path: 'clientes', component: ClientsComponent },
      { path: 'clientes-detalle', component: ClientDetailComponent },
      // roles
      { path: 'roles', component: RolesComponent },


      { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
