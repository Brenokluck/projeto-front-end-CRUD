import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie_display/movie-display/component/movie-display.component';
import {
  MoviesInteractedInterface,
  MoviesInterface,
  PaginatedInterface,
} from '../../../interface/movies-interface';
import { WatchedService } from '../service/watched.service';
import { PageComponent } from '../../../page/component/page.component';

@Component({
  selector: 'app-watched',
  imports: [
    CommonModule,
    MovieDisplayComponent,
    NavbarComponent,
    PageComponent,
  ],
  standalone: true,
  templateUrl: './watched.component.html',
  styleUrl: './watched.component.scss',
})
export class WatchedComponent {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInteractedInterface> =
    {} as PaginatedInterface<MoviesInteractedInterface>;

  constructor(public watchedService: WatchedService) {}
  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.watchedService.getPaginatedContent(page).subscribe((res) => {
      this.pages = res;
      this.movies = this.pages.content.map((movie) => {
        return {
          id: movie.movie_id.id,
          title: movie.movie_id.title,
          description: movie.movie_id.description,
          launch_date: movie.movie_id.launch_date,
          update_date: movie.movie_id.update_date,
          views: movie.movie_id.views,
          review_stars: movie.movie_id.review_stars,
          duration: movie.movie_id.duration,
        } as MoviesInterface;
      });
    });
  }
}
