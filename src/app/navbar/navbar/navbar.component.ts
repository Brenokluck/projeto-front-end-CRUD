import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Página Principal',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/home']),
      },
      {
        label: 'Favoritos',
        icon: 'pi pi-heart',
        command: () => this.router.navigate(['/favoritos']),
      },
      {
        label: 'Assistidos',
        icon: 'pi pi-eye',
        command: () => this.router.navigate(['/assistidos']),
      },
      {
        label: 'Não Gostei',
        icon: 'pi pi-thumbs-down',
        command: () => this.router.navigate(['/dislike']),
      },
      {
        label: 'Novo',
        icon: 'pi pi-plus',
        command: () => this.router.navigate(['/register']),
      },
    ];
  }
}
