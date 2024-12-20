import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Variable para controlar el estado del menú
  menuOpen = false;

  // Método para alternar el estado del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Detectar clic fuera del menú para cerrarlo
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = document.querySelector('.navbar-nav')?.contains(event.target as Node);
    const clickedToggleButton = document.querySelector('.navbar-toggler')?.contains(event.target as Node);

    if (!clickedInside && !clickedToggleButton && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}