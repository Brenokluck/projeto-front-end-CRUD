import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesInteractedInterface } from '../../../interface/movies-interface';
import { Observable } from 'rxjs';
import { PaginatorService } from '../../../paginator/paginator.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesPageService extends PaginatorService<MoviesInteractedInterface> {
  protected apiUrl: string = '/actions/favorite?page=';
}
