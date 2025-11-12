import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie_display/movie-display/component/movie-display.component';
import { MoviesInterface } from '../../../interface/movies-interface';
import { WatchedService } from '../service/watched.service';

@Component({
  selector: 'app-watched',
  imports: [CommonModule, MovieDisplayComponent, NavbarComponent],
  standalone: true,
  templateUrl: './watched.component.html',
  styleUrl: './watched.component.scss',
})
export class WatchedComponent {
  movies: MoviesInterface[] = [];

  constructor(public watchedService: WatchedService) {}

  ngOnInit(): void {
    this.watchedService.getPaginatedContent(0).subscribe((res) =>
      res.content.map((movie) => {
        this.movies.push(movie.movie_id);
      })
    );
  }
}
