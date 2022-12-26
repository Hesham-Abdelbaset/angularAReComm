import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}
  createNewCart(model: any) {
    return this.http.post(environment.baseApi + 'carts', model);
  }
}
