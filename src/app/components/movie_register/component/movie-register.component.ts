import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-register.component',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './movie-register.component.html',
  styleUrl: './movie-register.component.scss',
})
export class MovieRegisterComponent {}
