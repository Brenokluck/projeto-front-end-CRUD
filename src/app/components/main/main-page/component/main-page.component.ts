import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../service/main-page.service';
import { CommonModule } from '@angular/common';
import { MovieDisplayComponent } from '../../../movie_display/movie-display/component/movie-display.component';
import {
  MoviesInterface,
  PaginatedInterface,
} from '../../../../interface/movies-interface';
import { NavbarComponent } from '../../../../navbar/navbar/navbar.component';
import { PageComponent } from '../../../../page/component/page.component';

@Component({
  selector: 'app-main-page',
  imports: [
    CommonModule,
    MovieDisplayComponent,
    NavbarComponent,
    PageComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
})
export class MainPage implements OnInit {
  movies: MoviesInterface[] = [];
  pages: PaginatedInterface<MoviesInterface> =
    {} as PaginatedInterface<MoviesInterface>;

  constructor(private mainPageService: MainPageService) {}

  ngOnInit(): void {
    this.getPaginatedContent(0);
  }

  getPaginatedContent(page: number) {
    this.mainPageService.getPaginatedContent(page).subscribe((res) => {
      this.pages = res;
      this.movies = res.content as unknown as MoviesInterface[];
    });
  }
}
