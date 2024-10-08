import { Component } from '@angular/core';

@Component({
  templateUrl: './users.component.html',
  styles: ``,
  
   styleUrl: './users.component.css'
})
export class UsersComponent {


  isOpen = false; // Estado del offcanvas

  toggleOffcanvas() {
    this.isOpen = !this.isOpen; // Cambia el estado al hacer clic
  }

}
