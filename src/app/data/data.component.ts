import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  symbol: string = '';
  constructor(private route: ActivatedRoute) {
    this.symbol = route.snapshot.params['symbol']
  }
}
