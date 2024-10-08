import { Component } from '@angular/core';

@Component({
  templateUrl: './client-detail.component.html',
  styles: ``,
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  activeTab = 'tab1'; // Tab activa por defecto

  // Método para cambiar la pestaña activa
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  isOpen = false; // Estado inicial del acordeón

  toggleAccordion() {
    this.isOpen = !this.isOpen; // Cambia el estado al hacer clic
  }

}
