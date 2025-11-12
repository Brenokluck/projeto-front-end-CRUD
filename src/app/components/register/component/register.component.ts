import { Component } from '@angular/core';
import { MovieFormComponent } from '../../movie_form/component/movie-form.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';

@Component({
  selector: 'app-register.component',
  imports: [MovieFormComponent, CommonModule, NavbarComponent],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
