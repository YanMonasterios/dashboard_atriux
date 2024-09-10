import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/detail-unit/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/unidad_organizativa-page/list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { UnidadVentaComponent } from './unidad-venta/unidad-venta/unidad-venta.component';
import { DetailUnitVentaComponent } from './unidad-venta/detail-unit-venta/detail-unit-venta.component';


// localhost:4200/pages
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-page', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'unidades-organizativas/:id', component: NewPageComponent },
      { path: 'unidades-organizativas', component: ListPageComponent },
      // { path: ':id', component: DashboardPageComponent },
      // rutas
      { path: 'rutas', component: DashboardPageComponent },
      // unidades de ventas :
      { path: 'unidades-ventas/:id', component: DetailUnitVentaComponent },
      { path: 'unidades-ventas', component: UnidadVentaComponent },


      { path: '**', redirectTo: 'unidades-organizativas' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
