import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
//TODO not sure how to get symbol into the service
  fetchData = () => {

  }

  constructor(private http: HttpClient) { }
}
