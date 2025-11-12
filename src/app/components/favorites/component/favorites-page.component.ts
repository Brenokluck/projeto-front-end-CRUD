import { Component, OnInit } from '@angular/core';
import {
  MoviesInteractedInterface,
  MoviesInterface,
  PaginatedInterface,
} from '../../../interface/movies-interface';
import { FavoritesPageService } from '../service/favorites-page.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie_display/movie-display/component/movie-display.component';

@Component({
  selector: 'app-favorites-page',
  imports: [CommonModule, MovieDisplayComponent, NavbarComponent],
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent implements OnInit {
  movies: MoviesInterface[] = [];

  constructor(public favoritesPageService: FavoritesPageService) {}

  ngOnInit(): void {
    this.favoritesPageService.getPaginatedContent(0).subscribe((res) => {
      res.content.map((movie) => {
        this.movies.push(movie.movie_id);
      });
    });
  }
}
