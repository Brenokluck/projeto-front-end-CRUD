import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../interface/movies-interface';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MovieDisplay } from '../service/movie-display.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-display',
  imports: [DatePipe, RatingModule, FormsModule],
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss'],
})
export class MovieDisplayComponent {
  @Input() movies: MoviesInterface[] = [];

  constructor(
    public movieDisplayService: MovieDisplay,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  interactWithMovie(movie: MoviesInterface, event: any) {
    const movieInteraction = {
      ...event,
      movie_id: movie,
    } as MoviesInteractedInterface;

    this.movieDisplayService
      .saveMovieWhenInteracted(movieInteraction)
      .subscribe();
  }

  deleteMovie(movie: MoviesInterface) {
    let apiUrl = '/movies';

    if (this.route.snapshot.url[0].path !== 'home') {
      apiUrl = '/actions';
    }

    this.movieDisplayService.deleteMovie(movie, apiUrl).subscribe();
  }

  editMovie(movie: MoviesInterface) {
    this.router.navigate(['/register', movie]);
  }
}
