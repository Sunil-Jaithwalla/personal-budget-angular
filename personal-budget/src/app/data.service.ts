import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
      this.getBudget();
  }

public dataSource:any = {
    datasets: [
      {
        data: [],
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#6e7abb", "#95e982", "#b839d8"],
      },
    ],
    labels: [],
  };

isEmpty(val:any){
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}
getBudget() {
// Call service from backend only if the data is empty
  if (this.isEmpty(this.dataSource.datasets[0].data)|| this.isEmpty(this.dataSource.labels)){
  this.httpClient.get('http://localhost:3000' + '/budget').subscribe((res: any) => {
      console.log('server res', res);
      for (let i = 0; i < res.budgetData.length; i++) {
        this.dataSource.datasets[0].data[i] = res.budgetData[i].budget;
        this.dataSource.labels[i] = res.budgetData[i].title;
      }
    });
  }
}
}
