import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../service/main-page.service';
import { CommonModule } from '@angular/common';
import { MovieDisplayComponent } from '../../../movie_display/movie-display/component/movie-display.component';
import { MoviesInterface } from '../../../../interface/movies-interface';
import { NavbarComponent } from '../../../../navbar/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, MovieDisplayComponent, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
})
export class MainPage implements OnInit {
  movies: MoviesInterface[] = [];

  constructor(private mainPageService: MainPageService) {}

  ngOnInit(): void {
    this.mainPageService
      .getPaginatedContent(0)
      .subscribe(
        (res) => (this.movies = res.content as unknown as MoviesInterface[])
      );
  }
}
