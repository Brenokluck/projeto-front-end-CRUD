import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MoviesInterface,
  PaginatedInterface,
} from '../../../../interface/movies-interface';
import { PaginatorService } from '../../../../paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class MainPageService extends PaginatorService<
  PaginatedInterface<MoviesInterface>
> {
  protected apiUrl: string = '/movies/paginated?page=';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
