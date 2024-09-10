import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/unidad_organizativa-page/list-page.component';
import { NewPageComponent } from './pages/detail-unit/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
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
    // 
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    MaterialModule,  
    FormsModule,
    
  ],
  
})
export class ComponentsModule { }
