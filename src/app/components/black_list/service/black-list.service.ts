import { Injectable } from '@angular/core';
import {
  MoviesInteractedInterface,
  PaginatedInterface,
} from '../../../interface/movies-interface';
import { PaginatorService } from '../../../paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class BlackListService extends PaginatorService<
  PaginatedInterface<MoviesInteractedInterface>
> {
  protected override apiUrl: string = '/actions/blacklist?page=';
}
