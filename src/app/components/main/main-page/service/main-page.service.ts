import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedInterface } from '../../../../interface/movies-interface';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  constructor(public httpClient: HttpClient) {}

  getMainPage() {
    return this.httpClient.get<PaginatedInterface>('/movies/paginated?page=0');
  }
}
