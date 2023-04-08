import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  dataObj:any;
  dataX:string[] = [];
  dataY:string[] = [];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'time',
      data: ['2023-04-06 20:00:00', '2023-04-06 19:10:00', '2023-04-06 17:25:00', '2023-04-06 17:20:00', '2023-04-06 17:10:00', '2023-04-06 16:40:00', '2023-04-06 16:15:00'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [ 1290, 820, 1330, 932, 901, 934, 1320],
        type: 'line',
      },
    ],
  };
  symbol:string;
  constructor(private data: DataService, private route:ActivatedRoute) {
    this.symbol = route.snapshot.params['symbol']
  }

  ngOnInit(): void {
    this.data.fetchData(this.symbol).subscribe(t=>{
      this.dataObj=(t as any)['Time Series (5min)'];
      console.log(this.dataObj);
      for(let key in this.dataObj){
        this.dataX.push(key);
        this.dataY.push(this.dataObj[key]['1. open'])
      }
      this.updateChart();
    })
  }

  updateChart(): void {
    this.chartOption = {
      xAxis: {
        data: this.dataX.reverse(),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.dataY.reverse(),
          type: 'line',
        },
      ],
    };
  }


}
