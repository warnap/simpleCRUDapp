import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Category } from './category';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';


const baseUrl = 'http://127.0.0.1:8000/category/'

const httpOptions = {
  headers: new Headers({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('CategoryService');
     }


  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(baseUrl)
    .pipe(
      catchError(this.handleError('getCategories', []))
    );
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<Category>('${baseUrl}/${id}')
    .pipe(
      catchError(this.handleError('getCategory', id))
    );
  }
}
