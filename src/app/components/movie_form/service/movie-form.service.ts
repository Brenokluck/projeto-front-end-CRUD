import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesInterface } from '../../../interface/movies-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieFormService {
  constructor(public httpClient: HttpClient) {}

  saveMovie(movie: unknown): Observable<MoviesInterface> {
    return this.httpClient.post<MoviesInterface>('/movies', movie);
  }
}
