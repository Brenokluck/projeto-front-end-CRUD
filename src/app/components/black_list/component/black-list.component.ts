import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { MovieDisplayComponent } from '../../movie_display/movie-display/component/movie-display.component';
import { MoviesInterface } from '../../../interface/movies-interface';
import { BlackListService } from '../service/black-list.service';

@Component({
  selector: 'app-black-list.component',
  imports: [CommonModule, MovieDisplayComponent, NavbarComponent],
  standalone: true,
  templateUrl: './black-list.component.html',
  styleUrl: './black-list.component.scss',
})
export class BlackListComponent implements OnInit {
  movies: MoviesInterface[] = [];

  constructor(public blackListService: BlackListService) {}

  ngOnInit(): void {
    this.blackListService.getPaginatedContent(0).subscribe((res) =>
      res.content.map((movie) => {
        this.movies.push(movie.movie_id);
      })
    );
  }
}
