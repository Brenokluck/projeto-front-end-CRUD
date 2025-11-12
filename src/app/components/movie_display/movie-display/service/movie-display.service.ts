import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MoviesInteractedInterface,
  MoviesInterface,
} from '../../../../interface/movies-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDisplay {
  constructor(private httpClient: HttpClient) {}

  saveMovieWhenInteracted(
    movie: MoviesInteractedInterface
  ): Observable<MoviesInteractedInterface> {
    return this.httpClient.post<MoviesInteractedInterface>('/actions', movie);
  }
}
