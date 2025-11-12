import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedInterface } from '../interface/movies-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class PaginatorService<T extends PaginatedInterface<unknown>> {
  protected abstract apiUrl: string;

  constructor(private httpClient: HttpClient) {}

  public getPaginatedContent(
    page: number
  ): Observable<PaginatedInterface<any>> {
    return this.httpClient.get<PaginatedInterface<any>>(
      `${this.apiUrl}${page}`
    );
  }
}
