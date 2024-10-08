import { Component } from '@angular/core';

@Component({
  templateUrl: './clients.component.html',
  styles: ``,
   styleUrl: './clients.component.css'
})
export class ClientsComponent {

  activeTab = 'tab1'; 

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


  isOpen = false; // Estado del offcanvas

  toggleOffcanvas() {
    this.isOpen = !this.isOpen; // Cambia el estado al hacer clic
  }

}
