import { Injectable } from '@angular/core';
import { MoviesInteractedInterface } from '../../../interface/movies-interface';
import { PaginatorService } from '../../../paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class WatchedService extends PaginatorService<MoviesInteractedInterface> {
  protected apiUrl = '/actions/watched?page=';
}
