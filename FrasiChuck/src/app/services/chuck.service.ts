import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(
    private http: HttpClient
  ) { }

  getFrasi() {
    return this.http.get('https://api.icndb.com');
  }

  getNorris(frasiType) {
    return this.http.get('https://api.icndb.com/jokes=${frasiType}');
  }

}
