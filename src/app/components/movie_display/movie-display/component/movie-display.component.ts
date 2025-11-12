import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../interface/movies-interface';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MovieDisplay } from '../service/movie-display.service';

@Component({
  selector: 'app-movie-display',
  imports: [DatePipe, RatingModule, FormsModule],
  templateUrl: './movie-display.component.html',
  styleUrl: './movie-display.component.scss',
  standalone: true,
})
export class MovieDisplayComponent {
  @Input() movies: MoviesInterface[] = [];

  constructor(public movieDisplayService: MovieDisplay) {}

  interactWithMovie(movie: MoviesInterface, event: any) {
    const movieInteraction = {
      ...event,
      movie_id: movie,
    } as MoviesInteractedInterface;

    this.movieDisplayService
      .saveMovieWhenInteracted(movieInteraction)
      .subscribe();
  }

  deleteMovie(movie: any) {
    this.movieDisplayService.deleteMovie(movie).subscribe();
  }
}
