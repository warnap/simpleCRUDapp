import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiServer: string = "http://127.0.0.1:8000"

  constructor() { }

  createUrl(endPoint: string): string {

    let url = this.apiServer + endPoint;

    if(!endPoint.startsWith('/')) {
      url = this.apiServer + '/' + endPoint;
    }
    return url;
  }
}