import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, RouterModule} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  clientURL = "";
  data:any;
  fetchData(symbol:string){
    // console.log('symbol?:' +  this.route.snapshot.params['symbol'])
    // console.log('symbol: ' + this.symbol)
    this.clientURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
      + symbol
      + "&interval=5min&apikey=8Z3BW4XC9FM3ZYOC";
    // console.log(this.clientURL)
    // return this.http.get(this.clientURL).subscribe(d=>{return d})

    return this.http.get(this.clientURL);
  }

  constructor(private http: HttpClient) {}
}
