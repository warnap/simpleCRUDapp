import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Category } from './category';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { ApiService } from '../api.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService{
  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    super();
      this.handleError = httpErrorHandler.createHandleError('CategoryService');
     }


  getCategories(): Observable<Category[]>{
    const endPoint = 'category';
    const url = this.createUrl(endPoint);

    return this.http.get<Category[]>(url)
    .pipe(
      catchError(this.handleError('getCategories', []))
    );
  }

  getCategory(id: number): Observable<any> {
    const endPoint = 'category/' + id +'/';
    const url = this.createUrl(endPoint);

    return this.http.get<Category>(url)
    .pipe(
      catchError(this.handleError('getCategory', id))
    );
  }

  addCategory(category: Category): Observable<Category>{
    const endPoint = 'category/';
    const url = this.createUrl(endPoint);

    return this.http.post<Category>(url, category)
    .pipe(
      catchError(this.handleError('addCategory', category))
    );
  }

  updateCategory(category: Category): Observable<Category>{
    const endPoint = 'category/'+ category.id + '/';
    const url = this.createUrl(endPoint);

    return this.http.put<Category>(url, category, httpOptions)
    .pipe(
      catchError(this.handleError('updateCategory', category))
    );
  }

  deleteCategory(id: number): Observable<{}> {
    const endPoint = 'category/'+ id + '/';
    const url = this.createUrl(endPoint);

    return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteCategory', id))
    )
  };
}
