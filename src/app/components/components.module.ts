import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/mapComplete/dashboard-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/unidad_organizativa-page/list-page.component';
import { NewPageComponent } from './pages/detail-unit/new-page.component';
import { SearchPageComponent } from './pages/settings-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitDialogComponent } from './pages/dialogs/unit-dialog/unit-dialog.component';
import { UnitEditDialogComponent } from './pages/dialogs/unit-edit-dialog/unit-edit-dialog.component';
import { ConfirmDialogComponent } from './pages/dialogs/confirm-dialog/confirm-dialog.component';
import { UnidadVentaComponent } from './unidad-venta/unidad-venta/unidad-venta.component';
import { UnitVentaEditDialogComponent } from './unidad-venta/dialogs/unit-venta-edit-dialog/unit-venta-edit-dialog.component';
import { UnitVentaDialogComponent } from './unidad-venta/dialogs/unit-venta-dialog/unit-venta-dialog.component';
import { UnidadVentaConfirmDialogComponent } from './unidad-venta/dialogs/unidad-venta-confirm-dialog/unidad-venta-confirm-dialog.component';
import { DetailUnitVentaComponent } from './unidad-venta/detail-unit-venta/detail-unit-venta.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MapHousesComponent } from './pages/dashboard-page/map-houses/map-houses.component';

// graficas
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

// map
import mapboxgl from 'mapbox-gl';
import { UsersComponent } from './pages/users/users.component';
import { ClientsComponent } from './pages/clients/clients-list/clients.component';
import { ClientDetailComponent } from './pages/clients/client-detail/client-detail.component';
import { ZoomPageComponent } from './pages/dashboard-page/zoom-page/zoom-page.component';
import { LoadingComponent } from './pages/dashboard-page/loading/loading.component';
import { BtnMyLocationComponent } from './pages/dashboard-page/btn-my-location/btn-my-location.component';
import { SearchBarComponent } from './pages/dashboard-page/search-bar/search-bar.component';
import { SearchResultsComponent } from './pages/dashboard-page/search-results/search-results.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ActividadesComponent } from './pages/clients/actividades/actividades.component';
import { AddActividadesComponent } from './pages/clients/dialogs/add-actividades/add-actividades.component';
import { ListPermisosComponent } from './pages/roles/dialogs/list-permisos/list-permisos.component';
import { AddRolDialogComponent } from './pages/roles/dialogs/add-rol-dialog/add-rol-dialog.component';
import { UpdateRolDialogComponent } from './pages/roles/dialogs/update-rol-dialog/update-rol-dialog.component';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFuLW1vbmFzdGVyaW9zIiwiYSI6ImNtMGs3eHU3NTE0Nnoyam9hM2Yybzk0djAifQ.vx_WwgVnjX37Ags8nr9yEg';





@NgModule({
  declarations: [
    DashboardPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    FormatDatePipe,
    UnitDialogComponent,
    UnitEditDialogComponent,
    ConfirmDialogComponent,

    // Unidad de venta
    UnidadVentaComponent,
    UnitVentaEditDialogComponent,
    UnitVentaDialogComponent,
    UnidadVentaConfirmDialogComponent,
    DetailUnitVentaComponent,
    DashboardComponent,
    MapHousesComponent,
    UsersComponent,
    ClientsComponent,
    ClientDetailComponent,
    ZoomPageComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent,
    RolesComponent,
    ActividadesComponent,
    AddActividadesComponent,
    ListPermisosComponent,
    AddRolDialogComponent,
    UpdateRolDialogComponent,
    // 
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    MaterialModule,  
    FormsModule,
    BaseChartDirective
    
    
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  
})
export class ComponentsModule { }
