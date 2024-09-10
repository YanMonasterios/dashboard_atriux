import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    Error404Component,
    LoadingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Error404Component
  ]
})
export class SharedModule { }
